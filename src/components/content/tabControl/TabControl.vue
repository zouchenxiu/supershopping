<template>
  <div class="tab-control">
    <div v-for="(value,index) in titles" :key="index" 
    class="tab-control-item" 
    :class="{active:index===currentIndex}"
    @click="itemClick(index)">
        <span>{{value}}</span>
    </div>

  </div>
</template>

<script>
export default {
    name:'TabControl',
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            currentIndex:0
        }
    },
    methods:{
        itemClick(index){
            // 当点击到那个就指向active
            this.currentIndex = index;
            // 把这个方法传给home.vue,以及index传出去
            this.$emit('tabClick',index)
        }
    }
}
</script>

<style scoped>
    .tab-control{
        display: flex;
        text-align: center;
        font-size: 15px;
    }
    .tab-control-item{
        flex: 1;
        height: 40px;
        line-height: 40px;
    }
    .tab-control-item span{
        padding: 5px;
    }
    .active{
        color: rgb(245, 39, 66);
        
    }
    .active span{
        border-bottom: 2px solid rgb(245, 39, 66);
    }
</style>