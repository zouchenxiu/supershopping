<template>
    <div class="rate-info">
        <div class="user">
            <span class="more1">用户评价</span>
            <span class="more2">更多</span>
        </div>
        <div class="user-info">
            <div><span><img :src="rateInfo.user.avatar" alt=""></span><span class="uname">{{rateInfo.user.uname}}</span></div>
        </div>
        <div class="user-message">
            <p>{{rateInfo.content}}</p>
            <br>
            <p>{{rateInfo.created | showDate}} {{rateInfo.style}}</p>
        </div>
    </div>
</template>

<script>
import {formatDate} from '@/components/common/utiles.js'
export default {
    name:'DetailRateInfo',
    props:{
        rateInfo:{
            type:Object,
            default(){
                return {}
            }
        },
    },
        filters:{
            showDate(value){
                const date = new Date(value*1000)
                return formatDate(date)
            }
        }
}
</script>

<style>
.user{
    margin-top: 30px;
    position: relative;
    border-top: 2px solid rgb(211, 203, 203);
    padding-top: 15px;
    padding-bottom: 30px;
    border-bottom: 2px solid rgb(211, 203, 203);
}
.more1{
    position: absolute;
    left: 10px;
}
    .more2{
        position: absolute;
        right: 20px;
    }
    .user-info{
        /* text-align: center; */
        height: 60px;
        /* line-height: 50px; */
    }
    .user-info img{
        width: 40px;
        height: 40px;
    }
    .user-info .uname{
        font-weight: bold;
        font-size: 15px;
        margin-left: 50px;
    }
    .user-message{
        font-size: 12px;
    }
</style>