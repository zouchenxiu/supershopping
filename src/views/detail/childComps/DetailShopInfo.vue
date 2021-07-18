<template>
  <div id="shop-image">
      <div>
          <p class="title">{{detailInfo.desc}}</p>
          <p class="title">{{detailInfo.detailImage[0].key}}</p>
          <div class="img" v-for="(item,index) in detailInfo.detailImage[0].list" :key="index"> 
              <img :src="item" alt="">
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'DetailShopInfo',
    props:{
        detailInfo:{
            type:Object
        }
    }
}
</script>

<style>
    #shop-image{
        margin-top: 30px;
        position: relative;
    }
    .title{
        font-size: 14px;
        margin-bottom: 30px;
    }
    .img img{
        width: 100%;
        height: 100%;
    }
</style>