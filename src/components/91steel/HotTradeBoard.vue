<template>
  <div class="dash">
    <h1>热门交易种类</h1>
    <div class="board">
      <div id="hotTrade" class="charts"></div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import options from './HotTradeData'
export default {
  props: ['data'],

  data () {
    return {
      pieData: this.data.map(item => ({
        name: item.tradeTypeName,
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
        name: `${item.name}   (${(item.value * 100 / sum).toFixed()}%)`
      }))
    }
  },

  mounted () {
    const hotTrade = echarts.init(document.getElementById('hotTrade'))
    hotTrade.setOption(options)
    hotTrade.setOption({
      legend: [{
        x: '60%',
        y: `${45 - this.pieData.length * 5}%`
      }],
      series: [{
        radius: '70%',
        center: ['30%', '50%']
      }]
    })

    // 加载数据
    hotTrade.setOption({
      series: {data: this.pieDataFormat},
      legend: {data: this.pieDataFormat.map(item => item.name)}
    })
  }
}
</script>
