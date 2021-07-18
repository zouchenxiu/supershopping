<template>
  <div class="recommend">
      <div v-for="(value,index) in recommends" :key="index" class="recommend-item">
          <a :href="value.link">
              <img :src="value.image" alt="">
              <div>{{value.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name:'RecommendView',
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
    .recommend{
        display:flex;
        text-align: center;
        font-size: 12px;
        padding: 15px 0 30px;
        border-bottom: 8px solid #eee;
    }
    .recommend-item{
        flex: 1;
    }
    .recommend-item img{
        width: 65px;
        height: 65px;
        /* margin-top: 10px; */
        margin-bottom: 10px;

    }
</style>