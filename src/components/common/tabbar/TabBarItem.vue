<template>
  <div class="tab-bar-item" @click="itemClick">
      <!-- 建议外面使用div包裹一下 -->
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      
      <div :class="{active:isActive}"><slot name="item-text"></slot></div>
      
      
      <!-- <img src="../../assets/img/tabbar/首页-单.svg" alt="">
      <div>首页</div> -->
      </div>
  
</template>

<script>
export default {
    name:'TabBarItem',
    props:{
        path:String,
        // activeColor:{
        //     type:String,
        //     default:'red'
        // }
    },
    data(){
        return{
            // isActive:true
        }
    },
    computed:{
        isActive(){
            // 以下两种方式都可以
            return this.$route.path == this.path
            // return this.$route.path.indexOf(this.path) !== -1
        }
    },
    methods:{
        itemClick(){
            this.$router.replace(this.path)
        },
        // activeStyle(){
        //     return this.isActive ? {color:this.activeColor} : {}
        // }
    }
}
</script>

<style>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
}
.active{
    color: red;
}

</style>