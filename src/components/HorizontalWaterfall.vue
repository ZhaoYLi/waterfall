<template>
    <div id="level-waterfall">

    </div>
</template>
<script>
export default {
    props: {
       boxWidth: {
           type: [String, Number],
           default() {
               return '1000'
            }
       },
       lineNums: {
           type: Number,
           default() {
               return 4
           }
       },
       stdRadio: {
           type: [String, Number],
           default() {
               return 1.5
           }
       },
       imgList: {
           type: Array,
           default() {
               return []
           }
       }

    },
    data() {
        return {
            translateImgs: [],
            layoutImgs: [],
            stdHeight: Number ,
            imgs: []
        }
    },
    created() {
        this.stdHeight = parseInt(this.boxWidth / this.stdRadio)
        this.getNativeInfo()
    },
    mounted() {
        setTimeout(() => {
            this.createTag()
        }, 2000);
    },
    methods: {

        // 预加载图片
        loadImg(item) {
            return new Promise((resolve, reject)=>{
                let img = new Image()
                img.src = item
                img.onload = () => resolve(img)
                img.onerror = reject
            })
        },
        //1、获取图片原始宽高
        getNativeInfo() {
            let arr = [] // 用来存储promise

            // 预处理图片
            this.imgList.forEach(item => {
                let r = this.loadImg(item).then(img=>{
                    this.imgs.push(img)
                }).catch(err=>{
                  window.console.log(err)
                })
                arr.push(r)
            })
            
            // 图片全部加载完成
            Promise.all(arr).then(() =>{
                let count = 0
                this.translateImgs = []
                this.imgs.forEach(item=>{
                    let t = {
                        src: item.src,
                        width: item.width,
                        height: item.height
                    }
                    this.translateImgs.push(t)
                    count += 1
                })
                   if(count === this.imgs.length){
                       this.checkNums()
                   }
                })
        },
        /*****
         * 2、判断图片数量,对图片进行分组，后面需要对图片进行分组布局
         * 如果图片数量为1，那么这张图片将按照原始宽高比来铺满盒子显示
         * 如果图片数量大于1，则对图片进行分组，每组数量为每行显示的数量 */
        checkNums() {
            if(this.translateImgs.length === 1) {
                this.getOneImg(this.translateImgs[0])
            }else {
                let temp = []
                for(let i=0; i<this.translateImgs.length; i++) {
                    temp.push(this.translateImgs[i])
                    if(i % this.lineNums === this.lineNums -1) {
                        this.getGroupImg(temp)
                        temp = []
                    }
                }
                this.getGroupImg(temp)
            }
        },

        getOneImg(img) {
           let ratio = img.width / img.height
           img.width = this.boxWidth
           img.height = parseInt(this.boxWidth / ratio)
           this.layoutImgs.push(img) 
        },
        
        getGroupImg(imgs) {
            // 分组中只有一张图片（最后一张图片）
           if(imgs.length === 1) {
              this.displayOneImg(imgs[0])
           }else {
               this.displayGroupImg(imgs)
           }
        },
        /**
         * 如果分组中只有一张图片，即是列表中的最后一张图片，那么该图片会单独
         * 占满整行布局，如果高度过大，则以标准宽高比为准，其余部分被裁剪。否则，
         * 图片完整显示*/
        displayOneImg(img) {
           let ratio = img.width / img.height
           img.width = this.boxWidth
           if(ratio < this.stdRadio) {
               img.height = this.stdHeight
           }else {
               img.height = parseInt(this.boxWidth / ratio)
           }
           this.layoutImgs.push(img)
        },
        
        /**
         * 分组里有多张图片时的布局
         * ① 根据图片原始宽高比来计算每张图片高度为标准高度时的宽度 —— 相对宽度
         * ② 计算总的相对宽度 —— 所有图片相对宽度相加*/
        displayGroupImg(imgs) {
           let widths = [] //保存每张图片的相对宽度
           let ratios = [] //保存每张图片的原始宽高比
           imgs.forEach(item =>{
                 let ratio = Math.floor(item.width / item.height * 100) / 100

                 // 根据标准高度计算每张图片的相对宽度
                 let relateWidth = Math.floor(this.stdHeight * ratio *100) / 100
                 widths.push(relateWidth)
                 ratios.push(ratio)
           })
           // 计算所有图片高度为标准高度时的相对总宽度
           let totalWidth = widths.reduce((sum, item)=>{
                 return sum + item
           })
           let lineHeight = 0

           // 初始化每行剩余宽度 —— 未排列图片时剩余宽度为行宽
           let leftWidth = this.boxWidth
           
           imgs.forEach((item, i) =>{

               /**
                * 对第一张图片布局
                * 计算第一张图片在容器中占据的宽度和高度 */ 
               if(i===0) {
                   
                   // 根据图片的相对宽度与相对总宽度的比值来计算图片在容器中占据的宽度和高度
                   item.width = Math.floor(this.boxWidth * (widths[i]/totalWidth) *100) / 100

                   //根据图片在容器中占据的宽度和原始宽高比来计算在容器中所占的高度
                   item.height = lineHeight = Math.floor(item.width / ratios[i] * 100) / 100
                   leftWidth = this.boxWidth - item.width

               }else if(i===imgs.length - 1) {
                   /**
                    * 对一行中的最后一张图片布局
                    * 宽度为一行中的剩余宽度
                    * 高度为行高 —— 也是此行中第一张图片所占的高度
                    */
                   item.width = leftWidth
                   item.height = lineHeight

               }else {
                   /**
                    * 对一行中的中间其他图片布局
                    * 先设置图片高度为行高
                    * 根据高度和原始宽高比计算图片所占宽度
                    */
                   item.height = lineHeight
                   item.width = Math.floor(item.height * ratios[i] * 100) / 100
                   leftWidth = leftWidth - item.width
               }
               this.layoutImgs.push(item)
           })
        },

        createTag() {
          // 遍历待布局的图片，创建img标签，完成布局
          let parentTag = document.getElementById('level-waterfall')
          parentTag.style.width = this.boxWidth + 'px'
          this.layoutImgs.forEach((item) =>{
              let imgBox = document.createElement('div')
              let imgTag = document.createElement('img')
              imgBox.setAttribute('class', 'img-box')
              imgBox.style.width = item.width + 'px'
              imgBox.style.height = item.height + 'px'
              imgTag.setAttribute('src', item.src)
              imgBox.appendChild(imgTag)
              parentTag.appendChild(imgBox)
          })
        }
    },
}
</script>
<style>
body{
    min-height: 1200px;
}
#level-waterfall {
    margin: 10px auto;
}
.img-box {
    float: left;
    overflow: hidden;
}
img {
    width: 100%;
    height: 100%;
    display: block;
}
</style>
