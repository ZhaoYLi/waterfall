<template>
     <image-waterfall :imgList="imgList" :lazyloadData="lazyloadData" :direction="direction" :imgWidth="imgWidth" :imgHeight="imgHeight" :boxWidth="boxWidth"></image-waterfall>
</template>
<script>
import ImageWaterfall from '../components/Waterfall/VerticalWaterfall.vue'
const waterfallImage = [
    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=690543161,1150089743&fm=26&gp=0.jpg',
    'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2835641086,1608436616&fm=26&gp=0.jpg',
    'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2408485704,3815022096&fm=26&gp=0.jpg',
    'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2000804127,2516671663&fm=26&gp=0.jpg',
    'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4065651049,1828798457&fm=26&gp=0.jpg',
    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=531492081,3237819757&fm=26&gp=0.jpg',
    'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1378813036,351996947&fm=26&gp=0.jpg',
    'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2070043430,2746821758&fm=11&gp=0.jpg',
    'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3824076247,3598188036&fm=26&gp=0.jpg',
    'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=765328171,3594785484&fm=26&gp=0.jpg',
    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2256651767,2211564159&fm=26&gp=0.jpg',
    'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3500169367,3599758438&fm=26&gp=0.jpg',
    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=690543161,1150089743&fm=26&gp=0.jpg',
    'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2835641086,1608436616&fm=26&gp=0.jpg',
    'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2408485704,3815022096&fm=26&gp=0.jpg',
    'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2000804127,2516671663&fm=26&gp=0.jpg',
    'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4065651049,1828798457&fm=26&gp=0.jpg',
    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=531492081,3237819757&fm=26&gp=0.jpg',
    'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1378813036,351996947&fm=26&gp=0.jpg',
    'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2070043430,2746821758&fm=11&gp=0.jpg',
    'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3824076247,3598188036&fm=26&gp=0.jpg',
    'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=765328171,3594785484&fm=26&gp=0.jpg',
    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2256651767,2211564159&fm=26&gp=0.jpg',
    'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3500169367,3599758438&fm=26&gp=0.jpg'
]
const lazyloadData = [
    'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1378813036,351996947&fm=26&gp=0.jpg',
    'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2070043430,2746821758&fm=11&gp=0.jpg',
    'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3824076247,3598188036&fm=26&gp=0.jpg',
    'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=765328171,3594785484&fm=26&gp=0.jpg',
    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2256651767,2211564159&fm=26&gp=0.jpg',
    'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3500169367,3599758438&fm=26&gp=0.jpg',
    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=690543161,1150089743&fm=26&gp=0.jpg',
    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=690543161,1150089743&fm=26&gp=0.jpg',
    'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2835641086,1608436616&fm=26&gp=0.jpg',
    'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2408485704,3815022096&fm=26&gp=0.jpg',
    'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1378813036,351996947&fm=26&gp=0.jpg',
    'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2070043430,2746821758&fm=11&gp=0.jpg',
    'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3824076247,3598188036&fm=26&gp=0.jpg',
    'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=765328171,3594785484&fm=26&gp=0.jpg',
    'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2256651767,2211564159&fm=26&gp=0.jpg',
]
export default {
    components:{
      ImageWaterfall
    },
    data(){
        return {
            imgList: waterfallImage,
            lazyloadData: lazyloadData,
            direction: 'vertical',
            imgWidth: '250px',
            imgHeight: 'auto',
            boxWidth: '90%'
        }
    }
}
</script>
<style>

</style><template>
    <div ref="waterfallBox" id="box" :style="`width: ${boxWidth}`" class="waterfall-box">
      <div class="waterfall-item" v-for="(item, index) in imgList" :key="item + '-' + index">
          <img class="waterfall-img" :style="`width:${imgWidth};height:${imgHeight}`" :title="index" :src="item"/>
      </div>
    </div>
</template>
<script>
export default {
    props:{
        imgList:{
            type: Array,
            default: function(){
                return []
            }
        },
        lazyloadData: {
            type: Array,
            default() {
                return []
            }
        },
        imgWidth: {
            type: String,
            default() {
                return 'auto'
            }
        },
        imgHeight: {
            type: String,
            default() {
                return 'auto'
            }
        },
        direction: {
            type: String,
            default() {
                return 'vertical'
            }
        },
        boxWidth: {
            type: String,
            default() {
                return '100%'
            }
        }
    },
    data(){
        return{
          columnGap: 20,
          rowGap: 20,
          columns: Number,
          rows: Number,
          items: [],
          imgBox: Object
        } 
    },
    async mounted() {
        await this.getDivInfo()
        this.verticalWaterFall()

        // 当页面尺寸改变时触发，实现响应式布局
        window.onresize = ()=> {
           this.getDivInfo()
           this.verticalWaterFall()
        }
        // 监听滚动条事件,实现图片懒加载
        window.addEventListener('scroll', async ()=>{
            let height = this.getScrollTop() + this.getClient().height
            let lastItemTop = this.items[this.items.length - 1].offsetTop
            if(height >= lastItemTop) {
                await this.getDivInfo()
                // console.log('imgWidth', this.imgWidth)
                this.lazyloadData.forEach(item => {
                  let div = document.createElement('div')
                  div.setAttribute('class', 'waterfall-item')
                  let img = document.createElement('img')
                  img.setAttribute('class', 'waterfall-img')
                  img.setAttribute('src', item)
                  img.style.width = this.imgWidth + 'px'
                  img.style.height = this.imgHeight
                  div.appendChild(img)
                  this.imgBox.appendChild(div)  
                })
                this.verticalWaterFall()
            }
        })
    },
    methods: {
        /******************实现原理 —— 绝对定位*********************************
         * ①定义图片固定宽度，高度由内容决定、自适应
         * ②根据容器宽度计算布局列数columns
         * ③对第一行进行排列，获取第一行所有图片的高度存入数组arr
         * ④排列第二行，获取数组中高度最小第一行中的元素，将第二行中的第一张图片放置在它下方，
         * 此时top值为最小高度，left值为高度最小图片的offsetLest。
         * ⑤重新计算此列高度，更新数组arr
         * ⑥继续检索高度最小的元素，把待排列的第一张图片放置在下方
         * ⑦重复⑤⑥步骤
         */
        verticalWaterFall() {
            let arr = []
            this.columns = parseInt(this.boxWidth / (this.imgWidth + this.columnGap))
            for(let i=0; i<this.items.length; i++) {
               if(i < this.columns) {
                  this.items[i].style.top = 0
                  this.items[i].style.left = (this.imgWidth + this.columnGap) * i + 'px'
                  arr.push(this.items[i].offsetHeight)
                  // console.log('arr', arr)
               }else {
                   let minHeight = arr[0]
                   let index = 0
                   for(let j=0; j<arr.length; j++) {
                       if(minHeight > arr[j]) {
                           minHeight = arr[j]
                           index = j
                       }
                   }
                   this.items[i].style.top = arr[index] + this.rowGap + 'px'
                   this.items[i].style.left = this.items[index].offsetLeft + 'px'
                   arr[index] = arr[index] + this.items[i].offsetHeight + this.rowGap;
               }
            }
        }, 
        
        getDivInfo() {
            this.imgBox = document.getElementById('box')
            this.items = this.imgBox.children
            this.boxWidth = this.imgBox.clientWidth
            // offsetWidth: width + padding + border
            this.imgWidth = this.items[0].offsetWidth
            // console.log('offsetWidth', this.imgWidth) 
        },

        // 获取可视区域宽高，用于判断滚动条是否到底部
        getClient() {
            return {
                width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
            }
        },
        // 获取滚动条滚动的高度
        getScrollTop() {
            return window.pageYOffset || document.documentElement.scrollTop
        }
    },
}
</script>
<style>
* {
    padding: 0;
    margin: 0;
    position: relative;
}
.waterfall-box {
   /*width: 85%;*/
   position: relative;
   margin: 0 auto;
}
.waterfall-img {
    /* width: 300px;
    height: auto; */
    display: block;
}
.waterfall-item {
    position: absolute;
}
</style>
