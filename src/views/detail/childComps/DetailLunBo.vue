<template>
  <div class="lunbo">
      <div v-for="(item,index) in topImages" :key="index">
          <img :src="item" alt="">
      </div>
  </div>
</template>

<script>
export default {
name:'DetailLunBo',
props:{
    topImages:{
        type:Array,
        default(){
            return []
        }
    }
}
}
</script>

<style scoped>
.lunbo{
    display: flex;
    width: 100%;
    overflow: hidden;
    height: 200px;
}
.lunbo img{
    flex: 1;
    width: 100%;
    height: 300px;
    float: left;
}
</style>