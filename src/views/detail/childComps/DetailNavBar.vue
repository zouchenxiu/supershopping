<template>
  <div class="nav-bar">
      <nav-bar>
          <div slot="left" class="back" @click="backClick">
              <img src="@/assets/img/qita-img/detailBack.svg" alt="" >
          </div>
          <div slot="center" class="title">
              <div v-for="(item,index) in titles" 
              :key="index" 
              class="title-item" 
              :class="{active: index === currentIndex}" 
              @click="titleClick(index)">
              {{item}}
              </div>
          </div>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar.vue'
export default {
    name:'DetailNavBar',
    components:{
        NavBar
    },
    data(){
        return {
            titles:['商品','参数','评论','推荐'],
            currentIndex:0
        }
        
    },
    methods:{
        titleClick(index){
            this.currentIndex = index
            // console.log(index,this.currentIndex);
        },
    backClick(){
        // 点击返回箭头返回上一页
        this.$router.back()
    }
    }
}
</script>

<style scoped>
    .title{
        display: flex;  
        font-size: 13px;
    }
    .title-item{
        flex: 1;
    }
    .active{
        color: crimson;
    }
    .back img{
        width: 20px;
        height: 20px;
        margin-left: 35px;
        margin-top: 10px;
    }
    .nav-bar{
        width: 100%;
        height: 40px;
        position: fixed;
        top: 0px;
        z-index: 11;
        background: white;

    }
</style>