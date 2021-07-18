<template>
  <div id="detail">
      <!-- 最上面的导航栏 -->
      <detail-nav-bar></detail-nav-bar>
    <scroll class="content">
      <!-- 轮播图 -->
      <detail-lun-bo :topImages="topImages"></detail-lun-bo>
      <!-- 商品的基本信息 -->
      <detail-base-info :goods="goods"></detail-base-info>
      <!-- 店铺信息 -->
      <detail-shop :shop="shop"></detail-shop>
      <!-- 商品的具体的图片信息 -->
      <detail-shop-info :detailInfo="detailInfo"></detail-shop-info>
      <!-- 商品的参数信息 -->
      <detail-params-info :itemParams="itemParams"></detail-params-info>
      <detail-rate-info :rateInfo="rateInfo"></detail-rate-info>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import { getDetail, Goods, Shop } from "@/network/detail.js";
import DetailLunBo from "./childComps/DetailLunBo.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShop from "./childComps/DetailShop.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailParamsInfo from "./childComps/DetailParamsInfo.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import DetailRateInfo from './childComps/DetailRateInfo.vue';

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailLunBo,
    DetailBaseInfo,
    DetailShop,
    DetailShopInfo,
    DetailParamsInfo,
    Scroll,
    DetailRateInfo,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      itemParams: {},
      rateInfo:{}
    };
  },
  created() {
    // 1、获取iid，保存iid
    this.iid = this.$route.params.iid;
    // 2、根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      console.log(res);
      // 获取顶部的轮播图片
      this.topImages = res.data.result.itemInfo.topImages;
      // console.log(this.topImages);
      // console.log(res);
      // 获取商品信息
      // console.log(this.topImages, 'this.topImages')
      // 获取商品标题、价格等信息
      this.goods = new Goods(
        res.data.result.itemInfo,
        res.data.result.columns,
        res.data.result.shopInfo.services
      );
      // console.log(this.goods);
      // 获取店铺信息
      this.shop = new Shop(res.data.result.shopInfo);
      // console.log(this.shop)
      // 获取商品的具体图片等信息
      this.detailInfo = res.data.result.detailInfo;
      // console.log(this.detailInfo)
      // 获取商品参数信息
      this.itemParams = res.data.result.itemParams;
      console.log(this.itemParams);
    //   获取评论信息
    if(res.data.cRate !== 0){
        this.rateInfo = res.data.result.rate.list[0]
    }
    console.log(this.rateInfo);
    
    
    });
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  /* 让这个div在最上面 */
  z-index: 1;
  height: 100vh;
  background: white;
}
/* .nav-bar{
        position: fixed;
        top: 10px;
    } */
    .content{
        /* 用来遮盖tab-bar那个导航栏 */
        background: #fff;
        height: calc(100%-44px);
    }
</style>