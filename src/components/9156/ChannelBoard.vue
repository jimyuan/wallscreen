<template>
  <div class="dash">
    <h1>渠道销售排行</h1>
    <div class="board">
      <div id="channelBoard" class="charts"></div>
    </div>
  </div>
</template>

<script>
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
    /* eslint-disable no-undef */
    const channelBoard = echarts.init(document.getElementById('channelBoard'))
    channelBoard.setOption(options)
    channelBoard.setOption({
      series: { data: this.pieData }
    })
  }
}
</script>
