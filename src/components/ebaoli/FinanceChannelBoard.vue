<template>
  <div class="dash">
    <h1>筹资渠道</h1>
    <div class="board">
      <div id="financeChannel" class="charts"></div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import dataFormat from 'FILTERS/dataFormat'
import options from './FinanceChannelData'
export default {
  props: ['data'],

  data () {
    return {
      pieData: this.data.raiseChannelAnalysis.map(item => ({
        name: item.raiseChannelName,
        value: item.raiseChannelMoney
      }))
    }
  },

  computed: {
    pieDataFormat () {
      const pieData = this.pieData
      const sum = pieData.map(item => item.value).reduce((a, b) => a + b)
      return pieData.map(item => ({
        value: item.value,
        name: `${item.name} (${(item.value * 100 / sum).toFixed()}%, ${dataFormat(item.value)}万元)`
      }))
    }
  },

  mounted () {
    const financeChannel = echarts.init(document.getElementById('financeChannel'))
    financeChannel.setOption(options)
    financeChannel.setOption({
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
    financeChannel.setOption({
      legend: {data: this.pieDataFormat.map(item => item.name)},
      series: {data: this.pieDataFormat}
    })
  }
}
</script>
