<template>
  <div class="dash">
    <h1>成交用户分析</h1>
    <div class="board">
      <div id="consumerBoard"></div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import options from './ConsumerBoardData'
export default {
  mounted () {
    const chinaMap = echarts.init(document.getElementById('consumerBoard'))
    chinaMap.setOption(options)
  }
}
</script>
