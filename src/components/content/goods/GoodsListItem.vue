<template>
<div class="goods-item" @click="itemClick">
    <!-- @load="imageLoad用于监听图片是否加载完成 -->
  <img :src="goodsItem.show.img" alt="" @load="imageLoad">
  <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <!-- 显示收藏的内容 -->
      <span class="cfav"><img src="@/assets/img/qita-img/wujiaoxing.svg" alt="">{{goodsItem.cfav}}</span>
  </div>
  </div>
</template>

<script>
export default {
    name:'GoodsListItem',
    props:{
        goodsItem:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        imageLoad(){
            // console.log('imageLoad');
            // 发射一个事件总线
            this.$bus.$emit("itemImageLoad")
            // console.log(this.$bus);
        },
        itemClick(){
            // console.log("跳转到详情页");
            // 后面拼接的动态路由，具体在index.js中的路径中
            this.$router.push('/detail'+this.goodsItem.iid)
        }
    }
}
</script>

<style>
/* .goods-item{
    margin-bottom: 10px;

} */
.goods-item img{
    width: 100%;
}
.goods-info{
    font-size: 12px;
    /* position: relative; */
}
.goods-info p{
    overflow: hidden;
    white-space: nowrap;
}
.goods-info .price{
    color: rgb(243, 20, 213);
}
.cfav img{
    width: 15px;
    height:15px;
    /* position: absolute;
    top: 8px; */

}
</style>