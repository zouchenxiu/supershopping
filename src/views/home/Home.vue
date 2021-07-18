<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!-- 用来做滚动效果  better-scroll -->
    <scroll class="content" ref="scroll" 
    :probeType="3" 
    @scroll="contentScroll"
    :pullUpLoad ="true"
    @pullingUp="loadMore">
      <lun-bo :banners="banners" @LunBoImageLoad="LunBoImageLoad"></lun-bo>
        <recommend-view :recommends="recommends"></recommend-view>
        <feature-view></feature-view>
        <tab-control
          :titles="['流行', '新款', '精选']"
          @tabClick="tabClick"
          ref="tabControl"
        ></tab-control>
        <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>
    <!-- 监听原生组件的点击时需要加上native -->
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import { getHomeMultidata, getHomeGoods } from "../../network/home";
import LunBo from "./childrenComps/LunBo.vue";
import RecommendView from "./childrenComps/RecommendView.vue";
import FeatureView from "./childrenComps/FeatureView.vue";
import TabControl from "@/components/content/tabControl/TabControl.vue";
import GoodsList from "@/components/content/goods/GoodsList.vue";
import BackTop from "@/components/content/backTop/BackTop.vue";
import Scroll from "@/components/common/scroll/Scroll.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    LunBo,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    BackTop,
    Scroll,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop:false,
      // 距离顶部的高度
      tabOffsetTop:0,
      isTabFixed:false,
      saveY:0
    };
  },
  created() {
    // 请求多个数据
    this.getHomeMultidata();
    // 请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    // 监听item中图片加载完成，监听GoodsListItem中发过来的itemImageLoad事件
    
  },
  // destroyed(){
  //   console.log("homr");
  // },
  // activated(){
  //   this.$refs.scroll.scrollTo(0,-this.saveY,0)
  // },
  // deactivated(){
  //   this.saveY = this.$refs.scroll.scroll.y
  // },
  mounted(){
    // 图片加载完的事件监听
    const refresh = this.debounce(this.$refs.scroll.refresh)
    this.$bus.$on('itemImageLoad',()=>{
      // console.log("fdgf");
      // 如果没有防抖这里需要执行30次，有的话只需刷新一次
      // this.$refs.scroll.scroll.refresh()
      refresh()
    })
    
  },
  methods: {
  LunBoImageLoad(){
    // 获取tabControl的offsetTop
    // 所有的组件都有一个属性$el(里面的元素)
    // console.log(this.$refs.tabControl.$el.offsetTop);
    this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
  },
    // 事件监听相关方法
    // 防抖函数
    debounce(func,delay){
      let timer = null;
      // 这里的...表示可以传多个参数
      return function(...args){
        if(timer) clearTimeout(() => {
          func.apply(this,args)
        },delay)
      }

    },
    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    //点击回到顶部然后回到顶部
    backClick(){
      // console.log("haha");
      // 拿到ref=scroll的组件对象中的scroll的值,然后再调用scrollTo的这个方法（x，y，time）
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },
    // position是由scroll组件那边传过来的
    contentScroll(position){
      // console.log(position);
      // this.isShowBackTop = (position.y) > 1000
      // 判断BackTop是否显示
      if(position.y < -1000){
        this.isShowBackTop = true
      }else{
        this.isShowBackTop = false
      }
      // 决定tabControl是否吸顶（position：fixed）
      // if(position.y > this.tabOffsetTop){
      //   this.isTabFixed = false
      // }else{
      //   this.isTabFixed = true
      // }
    },
    loadMore(){
      // console.log("上拉加载更多");
      this.getHomeGoods(this.currentType)
    },
    // 网络请求相关方法
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res);
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
        // console.log(res.data.data.list);
        // 完成了上拉加载更多,finishPullUp在scroll.vue中
        // this.$refs.scroll.finishPullUp()
      });
    },
  },
};

// console.log("aaaa");
// setTimeout(()=>{
//   console.log("bbbb");
// })
// console.log("cccc");
</script>

<style scoped>
#home{
  height: 100vh;
}
.home-nav {
  background-color: rgb(235, 74, 100);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
/* .fixed{
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
} */
/* .tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
  background: rgb(243, 238, 238);
} */
.content{
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top:44px;
}
</style>
