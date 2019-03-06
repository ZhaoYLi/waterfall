<template>
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
          scrollTop: Number
        } 
    },
    mounted() {
        this.getDivInfo()
        this.checkDirection()
        window.onresize = ()=> {
           this.getDivInfo()
           this.checkDirection()
        }
        // window.addEventListener('scroll', ()=>{
        //    this.getScrollTop()
        // })
    },
    methods: {
        checkDirection() {
        //   if(this.direction == 'vertical') {
        //      this.verticalWaterFall()
        //   }else {
        //   }
        this.verticalWaterFall()
        },
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
            let box = document.getElementById('box')
            this.items = box.children
            // this.boxWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
            this.boxWidth = box.clientWidth
            this.imgWidth = this.items[0].offsetWidth
        },
        // getScrollTop() {
        //     this.scrollTop = window.pageYOffset || document.documentElement.scrollTop
        // }
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
