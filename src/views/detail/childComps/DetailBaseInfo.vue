<template>
  <div class="detail-base-info">
      <div class="title">{{goods.title}}</div>
      <div class="price"> 
        <span class="realPrice">￥{{goods.realPrice}}</span>
        <span class="oldPrice">{{goods.oldPrice}}</span>
        <span class="discount">{{goods.discount}}</span>
      </div> 
      <div class="baseInfo">
          <span v-for="(item,index) in goods.columns" :key="index">{{item}}</span>
      </div>
      <div class="wuliu">
          <div v-for="(item,index) in goods.services" :key="index">
              <img :src="item.icon" alt="">
              <span>{{item.name}}</span>
          </div>         
      </div>
       
        
  </div>
</template>

<script>
export default {
name:'DetailBaseInfo',
props:{
    goods:{
        type:Object
    }
}
}
</script>

<style scoped>
.detail-base-info{
    margin-top: 15px;
}
    .title{
        margin-top: 5px;
    }
    .price{
        position: relative;
        margin-top: 10px;
    }
    .oldPrice{
        text-decoration: line-through;
        margin-left: 10px;
        font-size: 12px;
        color: rgb(173, 168, 173);
    }
    .realPrice{
        color: rgb(250, 7, 108);
        font-size: 20px;
    }
    .discount{
        display: inline-block;
        /* width: 60px; */
        /* height: 25px; */
        border: 0px solid #000;
        border-radius: 10px;
        margin-left: 15px;
        text-align: center;
        /* line-height: 25px; */
        background: rgb(248, 46, 140);
        color: white;
        position: absolute;
        top: -5px;
        font-size: 12px;
        padding: 3px;
    }
    .baseInfo{
        display: flex;
        font-size: 12px;
        margin-top: 17px;
        color: rgb(173, 168, 173);
    }
    .baseInfo span{
        flex: 1;
    }
    .wuliu{
        height: 40px;
        line-height: 40px;
        /* position: relative; */
        margin-top: 15px;
        border-top: 1.5px solid rgb(212, 207, 207);
        border-bottom: 3px solid rgb(212, 207, 207);
        font-size: 12px;
        display: flex;
    }
    .wuliu div{
        width: 10px;
        height: 10px;
        flex: 1;
    }
    .wuliu img{
        width: 10px;
        height: 10px;
    }
    

</style>