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
  props: ['data'],

  data () {
    return {
      // 区域名称 data
      yData: this.data.map(item => item.regionName),
      // 挂牌量 data
      x1Data: this.data.map(item => item.quotedAmount),
      x1Name: '挂牌量',
      // 成交量 data
      x2Data: this.data.map(item => item.tradeAmount),
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
