<template>
<!-- 用于实现滚动   封装滚动效果 -->
<!-- ref一般绑定给 -->
  <div class="wrapper" ref="wrapper"> 
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'Scroll',
    // 通过home组件传入probeType的值用于是否需要实时监听
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            scroll: null
        }
    },
    mounted(){
        // this.scroll = new BScroll(document.querySelector('.wrapper'),{

        // })
        // 1、创建bsscroll对象
        this.scroll = new BScroll(this.$refs.wrapper,{
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad
        })
        // 回到顶部
        // this.scroll.scrollTo(0,0)
        //2、监听滚动的位置
        this.scroll.on('scroll',(position)=>{
            // console.log(position);
            this.$emit('scroll',position)
        })

        // // 监听scroll滚动到底部
        // if(this.pullUpLoad){
        //     this.scroll.on('pullingUp',()=>{
        //         this.$emit('pullingUp')
        //     })
        // }
        // 监听上拉事件
    this.scroll.on('pullingUp',()=>{
        // console.log("shanglai");
        this.$emit('pullingUp')
    })
    // console.log(this.scroll);
    this.scroll.refresh()

    },
    // methods:{
    //     finishPillUp(){
    //         this.scroll && this.scroll.finishPillUp()
    //     }
    // }
}
</script>

<style>

</style>