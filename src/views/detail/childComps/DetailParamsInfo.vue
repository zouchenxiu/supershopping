<template>
  <div class="params-info">
    <div class="table1">
      <table
        class="table"
        v-for="(item, index) in itemParams.rule.tables"
        :key="index"
      >
        <tr class="tr" v-for="(tr, indey) in item" :key="indey">
          <td class="td" v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
        </tr>
      </table>
    </div>
    <div class="table2">
      <table>
        <tr v-for="(item, index) in itemParams.info.set" :key="index">
          <!-- <td v-for="(td,indez) in item" :key="indez">{{td}}</td> -->
          <td>{{ item.key }}</td>
          <td class="td-value">{{item.value}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamsInfo",
  props: {
    itemParams: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.params-info {
  position: relative;
}
.tr {
  border-bottom: 1px solid #000;
  /* height: 10px;
        width: 500px; */
}
.td {
  /* height: s */
  padding: 10px;
  padding-left: 40px;
  font-size: 12px;
}
.table1 {
    margin-left: -25px;
}
.table2{
    margin-left: -45px;
}
.table2 td{
    height: 40px;
    font-size: 12px;
    padding-left: 60px;

}
.td-value{
    color: rgb(253, 10, 160);
    margin-left: 100px;
}
</style>