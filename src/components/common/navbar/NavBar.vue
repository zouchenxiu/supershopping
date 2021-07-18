<template>
  <div class="nav-bar">
      <!-- 不要直接在slot中设置class可以在外面包裹一个div -->
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
    name:'NavBar'
}
</script>

<style>
    .nav-bar{
        display: flex;
        line-height: 44px;
        height: 44px;
    }
    .left, .right{
        width: 60px;
        /* background: pink; */
    }
    .center{
        /* 当其他的设置了宽度，那么剩余宽度 就都是他的了 */
        flex: 1;
        /* background: pink; */
        text-align: center;
        box-shadow: 0 1px 1px rgba(100,100,100,0.1);
    }
</style>