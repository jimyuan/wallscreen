<template>
  <div class="dash">
    <h1>挂牌量分析</h1>
    <div class="board">
      <h2 class="trans-count">
        <span class="total">总挂牌量：{{ totalHangOut | dataFormat }} 吨</span>
        <span></span>
      </h2>
      <h2 class="trans-count hang-out">
        <span class="total">总成交量：{{ totalDeal | dataFormat }} 吨</span>
        <span>总结算量：{{ totalDone | dataFormat }} 吨</span>
      </h2>
      <div id="hangOut" class="charts"></div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import options from './HangOutData'
import common from 'CHARTS/commonData'
export default {
  props: ['data'],

  data () {
    return {
      // 总挂牌量
      totalHangOut: this.data.allQuotedAmount,
      // 总成交量
      totalDeal: this.data.allStatementsAmount,
      // 总结算量
      totalDone: this.data.allTradeAmount,
      // 总挂牌量 category
      xData: this.data.quotedTradeRecords.map(item => item.month).reverse(),
      // 总挂牌量 data
      yData: this.data.quotedTradeRecords.map(item => item.quotedAmount).reverse(),
      // 成交量 & 结算量
      barData: [this.data.allTradeAmount, this.data.allStatementsAmount]
    }
  },

  mounted () {
    const hangOut = echarts.init(document.getElementById('hangOut'))
    hangOut.setOption(options)
    hangOut.setOption({
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
    hangOut.setOption({
      xAxis: [
        {data: this.xData}
      ],
      series: [
        {data: this.yData},
        {data: this.barData.splice(0, 1)},
        {data: this.barData.splice(-1, 1)}
      ]
    })
  }
}
</script>
