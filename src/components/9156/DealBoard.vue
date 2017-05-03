<template>
  <div class="dash">
    <h1>全网成交情况</h1>
    <div class="board">
      <h2 class="trans-count">
        <span>{{ monthCount.monthName }}: {{ monthCount.sum | dataFormat }} 吨</span>
        <span>{{ totalCount.monthName }}: {{ totalCount.sum | dataFormat }} 吨</span>
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
  props: ['data'],

  data () {
    return {
      monthCount: this.data[0],
      totalCount: this.data[1],
      xData: this.data.map(item => parseInt(item.monthName, 10)),
      yData: this.data.map(item => item.sum)
    }
  },

  mounted () {
    const dealBoard = echarts.init(document.getElementById('dealBoard'))
    dealBoard.setOption(options)
    dealBoard.setOption({
      grid: [{
        backgroundColor: {
          colorStops: common.gradient(this.xData.length - 2, common.oddColor, common.evenColor)
        }
      }],
      xAxis: [{
        axisLabel: common.monthLabel
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
      xAxis: {data: this.xData.slice(2).reverse()},
      series: {data: this.yData.slice(2).reverse()}
    })
  }
}
</script>
