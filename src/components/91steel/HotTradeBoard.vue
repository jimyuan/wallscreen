<template>
  <div class="dash">
    <h1>热门交易种类</h1>
    <div class="board">
      <div id="hotTrade" class="charts"></div>
    </div>
  </div>
</template>

<script>
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

  mounted () {
    /* eslint-disable no-undef */
    const hotTrade = echarts.init(document.getElementById('hotTrade'))
    hotTrade.setOption(options)
    hotTrade.setOption({
      series: {
        label: {
          normal: {
            formatter: '{b} ({d}%)'
          }
        },
        data: this.pieData
      }
    })
  }
}
</script>
