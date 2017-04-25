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
import options from './DistributeRateData'
export default {
  data () {
    return {
      pieData: [
        {name: 'aaa', value: 123},
        {name: 'bbb', value: 123},
        {name: 'ccc', value: 123},
        {name: 'eee', value: 123}
      ]
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
      legend: {data: this.pieData.map(item => item.name)},
      series: {data: this.pieData}
    })
  }
}
</script>
