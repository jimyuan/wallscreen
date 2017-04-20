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
export default {
  data () {
    return {
      monthCount: 1235,
      totalCount: 54321
    }
  },

  mounted () {
    const chinaMap = echarts.init(document.getElementById('dealBoard'))
    chinaMap.setOption(options)
  }
}
</script>
