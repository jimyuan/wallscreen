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
  data () {
    return {
      pieData: [
        {name: 'aaa', value: 123},
        {name: 'bbb', value: 123},
        {name: 'ccc', value: 123},
        {name: 'ddd', value: 123},
        {name: 'eee', value: 123}
      ]
    }
  },

  mounted () {
    const channelBoard = echarts.init(document.getElementById('channelBoard'))
    channelBoard.setOption(options)

    // 数据加载
    channelBoard.setOption({
      legend: {data: this.pieData.map(item => item.name)},
      series: {data: this.pieData}
    })
  }
}
</script>
