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
  mounted () {
    const regionalDeal = echarts.init(document.getElementById('regionalDeal'))
    regionalDeal.setOption(options)
  }
}
</script>
