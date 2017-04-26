<template>
  <div class="dash">
    <h1>渠道销售排行</h1>
    <div class="board">
      <div id="channelBoard" class="charts"></div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import options from './ChannelData'
export default {
  props: ['data'],

  data () {
    return {
      pieData: this.data.map(item => ({
        name: item.channelName,
        value: item.sum
      }))
    }
  },

  mounted () {
    const channelBoard = echarts.init(document.getElementById('channelBoard'))
    channelBoard.setOption(options)
    channelBoard.setOption({
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
    channelBoard.setOption({
      legend: {data: this.pieData.map(item => item.name)},
      series: {data: this.pieData}
    })
  }
}
</script>
