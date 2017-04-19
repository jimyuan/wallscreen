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
      <div id="hangOut"></div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import options from './HangOutData'
export default {
  data () {
    return {
      totalHangOut: 222393,
      totalDeal: 3293,
      totalDone: 1392377
    }
  },
  mounted () {
    const hangOut = echarts.init(document.getElementById('hangOut'))
    hangOut.setOption(options)
  }
}
</script>
