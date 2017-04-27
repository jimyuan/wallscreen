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
  props: ['data'],

  data () {
    return {
      pieData: this.data.map(item => ({
        name: item.businessTypeName,
        value: item.tradeAmount
      }))
    }
  },

  computed: {
    pieDataFormat () {
      const pieData = this.pieData
      const sum = pieData.map(item => item.value).reduce((a, b) => a + b)
      return pieData.map(item => ({
        value: item.value,
        name: `${item.name} (${(item.value * 100 / sum).toFixed()}%)`
      }))
    }
  },

  mounted () {
    const tradeCount = echarts.init(document.getElementById('tradeCount'))
    tradeCount.setOption(options)
    tradeCount.setOption({
      legend: [{
        x: '50%',
        y: `${45 - this.pieData.length * 5}%`
      }],
      series: [{
        radius: '70%',
        center: ['30%', '50%']
      }]
    })

    // 数据加载
    tradeCount.setOption({
      legend: {data: this.pieDataFormat.map(item => item.name)},
      series: {data: this.pieDataFormat}
    })
  }
}
</script>
