<template>
  <div class="dash">
    <h1>挂牌量分析</h1>
    <div class="board">
      <h2 class="trans-count">
        <span class="total">总挂牌量：{{ totalHangOut | dataFormat }}</span>
        <span></span>
      </h2>
      <h2 class="trans-count hang-out">
        <span class="total">总成交量：{{ totalDeal | dataFormat }}</span>
        <span>总结算量：{{ totalDone | dataFormat }}</span>
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
  data () {
    return {
      // 总挂牌量
      totalHangOut: 222393,
      // 总成交量
      totalDeal: 3293,
      // 总结算量
      totalDone: 1392377,
      // 总挂牌量 category
      xData: ['11月', '12月', '1月', '2月', '3月', '本月'],
      // 总挂牌量 data
      yData: [300, 450, 660, 520, 700, 830],
      // 成交量 & 结算量
      barData: [1100, 1300]
    }
  },
  mounted () {
    const hangOut = echarts.init(document.getElementById('hangOut'))
    // 设置坐标区斑马纹效果
    options.grid[0].backgroundColor.colorStops = common.gradient(this.xData.length, common.oddColor, common.evenColor)
    hangOut.setOption(options)

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
