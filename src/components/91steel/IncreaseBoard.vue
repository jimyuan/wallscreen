<template>
  <div class="dash">
    <h1>近半年交易增长趋势</h1>
    <div class="board">
      <div id="increase" class="charts"></div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import options from './IncreaseData'
import common from 'CHARTS/commonData'
export default {
  props: ['data'],

  data () {
    return {
      // 折线图 category
      xData: this.data.quotedTradeRecords.map(item => item.month),
      yData: this.data.quotedTradeRecords.map(item => item.tradeAmount)
    }
  },
  mounted () {
    const increase = echarts.init(document.getElementById('increase'))
    // 设置坐标区斑马纹效果
    options.grid[0].backgroundColor.colorStops = common.gradient(this.xData.length, common.oddColor, common.evenColor)
    increase.setOption(options)

    // 加载数据
    increase.setOption({
      xAxis: {data: this.xData},
      series: {data: this.yData}
    })
  }
}
</script>
