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
export default {
  mounted () {
    const increase = echarts.init(document.getElementById('increase'))
    increase.setOption(options)
  }
}
</script>
