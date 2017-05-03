<template>
  <div class="dash">
    <h1>交易量统计</h1>
    <div class="board">
      <div id="tradeCount" class="charts"></div>
    </div>
  </div>
</template>

<script>
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

  mounted () {
    /* eslint-disable no-undef */
    const tradeCount = echarts.init(document.getElementById('tradeCount'))
    tradeCount.setOption(options)
    tradeCount.setOption({
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
