<template>
  <div class="dash">
    <h1>交易量统计</h1>
    <div class="board">
      <div id="tradeCount" class="charts"></div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import options from './TradeCountData'
export default {
  data () {
    return {
      pieData: [{
        value: 123234,
        name: '申银量'
      }, {
        value: 73186,
        name: '寄售量'
      }, {
        value: 33392,
        name: '自营量'
      }, {
        value: 18211,
        name: '工程配送'
      }, {
        value: 9764,
        name: '撮合'
      }]
    }
  },
  mounted () {
    const tradeCount = echarts.init(document.getElementById('tradeCount'))
    tradeCount.setOption(options)

    // 数据加载
    tradeCount.setOption({
      legend: {data: this.pieData.map(item => item.name)},
      series: {data: this.pieData}
    })
  }
}
</script>
