<template>
  <v-ons-page>
    <v-ons-toolbar>
      <div class="center">Hello,Nuxt-OnsenUI!</div>
    </v-ons-toolbar>
    <line-chart :data="chartData" :options="chartOptions"></line-chart>
  </v-ons-page>
</template>

<script>
import LineChart from "../components/LineChart.js";
export default {
  components: {
    LineChart
  },
  data() {
    return {
      chartData: {
        labels: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月"
        ],
        datasets: [
          {
            label: "2018年",
            data: [8, 7, 7, 6, 5, 8, 9, 6, 7, 4, 8, 7],
            fill: false
          }
        ]
      },
      chartOptions: {
        title: {
          display: true,
          text: "平均睡眠時間"
        },
        responsive: true,
        maintainAspectRatio: false
      }
    };
  }
};
</script>

<style>
</style>

