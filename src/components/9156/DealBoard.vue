<template>
  <div class="dash">
    <h1>全网成交情况</h1>
    <div class="board">
      <h2 class="trans-count">
        <span>本月累计运输量：{{ monthCount | dataFormat }} 吨</span>
        <span>累计运输量：{{ totalCount | dataFormat }} 吨</span>
      </h2>
      <div id="dealBoard" class="charts"></div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import options from './DealData'
import common from 'CHARTS/commonData'
export default {
  data () {
    return {
      monthCount: 1235,
      totalCount: 54321,
      xData: ['11月', '12月', '1月', '2月', '3月', '本月'],
      yData: [5.0, 14.9, 7.0, 23.2, 25.6, 16.7]
    }
  },

  mounted () {
    const dealBoard = echarts.init(document.getElementById('dealBoard'))
    dealBoard.setOption(options)
    dealBoard.setOption({
      grid: [{
        backgroundColor: {
          colorStops: common.gradient(this.xData.length, common.oddColor, common.evenColor)
        }
      }],
      series: [{
        type: 'bar',
        barWidth: '40%',
        itemStyle: {
          normal: {
            color: common.lineColor
          }
        }
      }]
    })

    // 数据加载
    dealBoard.setOption({
      xAxis: {data: this.xData},
      series: {data: this.yData}
    })
  }
}
</script>
