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
      xData: this.data.quotedTradeRecords.map(item => item.month).reverse(),
      yData: this.data.quotedTradeRecords.map(item => item.tradeAmount).reverse()
    }
  },
  mounted () {
    const increase = echarts.init(document.getElementById('increase'))
    increase.setOption(options)
    increase.setOption({
      yAxis: [{
        name: '单位: 万吨',
        axisLabel: common.cashLabel
      }],
      xAxis: [{
        axisLabel: common.monthLabel
      }],
      grid: [{
        // 设置坐标区斑马纹效果
        backgroundColor: {
          colorStops: common.gradient(this.xData.length, common.oddColor, common.evenColor)
        }
      }]
    })

    // 加载数据
    increase.setOption({
      xAxis: {data: this.xData},
      series: {data: this.yData}
    })
  }
}
</script>
