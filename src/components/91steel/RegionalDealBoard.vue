<template>
  <div class="dash">
    <h1>区域成交分析</h1>
    <div class="board">
      <div id="regionalDeal" class="charts"></div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import options from './RegionalDealData'
export default {
  data () {
    return {
      yData: ['西北', '西南', '北方', '华东', '南方'],
      x1Data: [1120, 990, 1500, 810, 1000],
      x1Name: '挂牌量',
      x2Data: [1000, 800, 1250, 600, 690],
      x2Name: '成交量'
    }
  },
  mounted () {
    const regionalDeal = echarts.init(document.getElementById('regionalDeal'))
    regionalDeal.setOption(options)

    regionalDeal.setOption({
      yAxis: {data: this.yData},
      series: [
        {name: this.x1Name, data: this.x1Data},
        {name: this.x2Name, data: this.x2Data}
      ],
      legend: {data: [this.x1Name, this.x2Name]}
    })
  }
}
</script>
