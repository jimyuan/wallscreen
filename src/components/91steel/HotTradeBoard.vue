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
  data () {
    return {
      pieData: [{
        value: 123234,
        name: '建材'
      }, {
        value: 73186,
        name: '热卷'
      }, {
        value: 33392,
        name: '厚板'
      }]
    }
  },
  mounted () {
    options.series[0].data = this.pieData

    const hotTrade = echarts.init(document.getElementById('hotTrade'))
    hotTrade.setOption(options)
  }
}
</script>
