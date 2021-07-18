<template>
<!-- 看这里是否有数据，如果没有那这个大的div就不显示 -->
  <div id="Shop" v-if="Object.keys(shop).length !== 0">
      <div class="shop">
          <img :src="shop.shopLogo" alt=""><span>{{shop.shopName}}</span>
      </div>
      <div class="shopping">
          <p>{{shop.cSells | sellCountFilter}}</p>
          <p>总销量</p>
      </div>
      <div class="baby">
          <p>{{shop.cGoods}}</p>
          <p>全部宝贝</p>
      </div>
      <div class="info">
          <!-- <div v-for="(item,index) in shop.score" :key="index">
          <p>{{item.name}}  {{item.score}}</p> -->
          <table>
              <tr v-for="(item,index) in shop.score" :key="index">
                  <td>{{item.name}}</td>
                  <td class="score" :class="{'score-more': item.isBetter}">{{item.score}}</td>
                  <td class="score" :class="{'score-more': item.isBetter}"><span>{{item.isBetter ? '高': '低'}}</span></td>
              </tr>
          </table>
      </div>
      <div class="shopUrl">
          <a href="shop.shopUrl">进店逛逛</a>
      </div>
    </div>
      
  
</template>

<script>
export default {
    name:'DetailShop',
    props:{
        shop:{
            type:Object
        }
    },
    filters:{
        // 用来对销售额的数值过滤
        sellCountFilter(value){
            let result = value
            if(value > 10000){
                result = (result/10000).toFixed(1)+"万" 
            }
            return result
        }
    }
}
</script>

<style scoped>
    .shop img{
        width: 50px;
        height: 50px;
    }
    .shop{
        height: 80px;
        position: relative;
        /* border: 1px solid #000; */
    }
    .shop span{
        display: inline-block;
        position: absolute;
        top: 10px;
        left: 60px;
        /* line-height: 80px; */
    }
    .info span{
        display: inline-block;
    }
    .info td{
        height: 20px;
    }
    #Shop{
        position: relative;
    }
    .shopping{
        position: absolute;
        left: 10%;
        font-size: 12px;
    }
    .baby{
        position: absolute;
        left: 30%;
        font-size: 12px;
    }
    .info{
        position: absolute;
        left: 60%;
        font-size: 12px;
    }
    .score{
        color: green;
        
    }
    .score-more{
        color: red;
    }
    #Shop{
        height: 200px;
        border-bottom: 3px solid rgb(241, 237, 237);
    }
    .shopUrl{
        width: 100px;
        height: 20px;
        position: absolute;
        bottom: 20px;
        left: 38%;
        background: rgb(218, 238, 241);
        border-radius: 5px;
        line-height: 20px;
        text-align: center;
        font-size: 14px;
    }
</style>