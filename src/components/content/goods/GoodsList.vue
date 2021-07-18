<template>
  <div class="goods">
      <goods-list-item v-for="(item,index) in goods" :key="index"
      :goodsItem="item" class="goods-list-item"
      ></goods-list-item>
      <!-- {{goods}} -->
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
    name:'GoodsList',
    components:{
        GoodsListItem
    },
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
    .goods{
        display: flex;
        flex-wrap: wrap;
    }
    .goods-list-item{
        /* flex: 30; */
        width: 48%;
        margin: 1%;
    }
</style>