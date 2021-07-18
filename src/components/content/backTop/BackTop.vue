<template>
  <div class="back-top" @click="backClick">
      <img src="@/assets/img/qita-img/backtop.svg" alt="">
  </div>
</template>

<script>
export default {
    name:'BackTop',
    methods:{
        backClick(){
            // console.log("huidaodingbu");
        }
    }
}
</script>

<style>
    .back-top{
        position: fixed;
        bottom: 50px;
        right: 10px;
    }
    .back-top img{
        width: 30px;
        height: 30px;
    }
</style>