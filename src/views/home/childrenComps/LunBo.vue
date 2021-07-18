<template>
  <div class="slide">
      <div v-for="(value,index) in banners" :key="index" class="lunbo-item">
          <a :href="value.link">
              <img :src="value.image" alt="" @load="imageLoad">
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name:'LunBo',
    props:{
        banners:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        imageLoad(){
            // console.log("hh");
            this.$emit('LunBoImageLoad')
        }
    }
}
</script>

<style>
    .slide{
        display: flex;
        /* width: 360px; */
        
        /* width: 100%; */

    }
    .lunbo-item{
        /* flex: 1; */
        
        width: 100%;
        overflow: hidden;
        
    }
    .lunbo-item img{
        width: 360px;
        height: 200px;
        /* width: 100%; */
        float: left;
    }
</style>