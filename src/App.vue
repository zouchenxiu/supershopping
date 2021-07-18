<template>
  <div id="app">
    <!-- 不要销毁，保留状态,除了detail外 -->
    <keep-alive exclude="Detail"><router-view></router-view></keep-alive>
    
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="./assets/img/tabbar/首页-单.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/首页-彩.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="./assets/img/tabbar/分类-单.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/分类-彩.svg" alt=""> 
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="./assets/img/tabbar/购物车-单.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/购物车-彩.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="./assets/img/tabbar/我的-单.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/我的-彩.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>


import TabBar from './components/common/tabbar/TabBar'
import TabBarItem from './components/common/tabbar/TabBarItem'
export default {
  name: 'App',
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>
@import "assets/css/base.css"
</style>
