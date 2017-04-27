<template>
  <div class="dash">
    <h1>大智运配送比</h1>
    <div class="board">
      <div id="distributeRate" class="charts"></div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import dataFormat from 'FILTERS/dataFormat'
import options from './DistributeRateData'
export default {
  props: ['data'],

  data () {
    return {
      pieData: this.data.shippingScaleAnalysis.map(item => ({
        name: item.shippingScaleName,
        value: item.shippingScaleAmount
      }))
    }
  },

  computed: {
    pieDataFormat () {
      const pieData = this.pieData
      const sum = pieData.map(item => item.value).reduce((a, b) => a + b)
      return pieData.map(item => ({
        value: item.value,
        name: `${item.name} (${(item.value * 100 / sum).toFixed()}%, ${dataFormat(item.value)}吨)`
      }))
    }
  },

  mounted () {
    const distributeRate = echarts.init(document.getElementById('distributeRate'))
    distributeRate.setOption(options)
    distributeRate.setOption({
      legend: [{
        x: '50%',
        y: `${45 - this.pieData.length * 5}%`
      }],
      series: [{
        radius: '60%',
        center: ['20%', '50%']
      }]
    })
    // 数据加载
    distributeRate.setOption({
      legend: {data: this.pieDataFormat.map(item => item.name)},
      series: {data: this.pieDataFormat}
    })
  }
}
</script>
