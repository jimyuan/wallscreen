<template>
  <div class="dash">
    <h1>注册用户/企业分析</h1>
    <div class="board">
      <h2 class="trans-count">
        <span>本月注册用户：{{ monthlyUser | dataFormat }}</span>
        <span>累计注册用户：{{ totalUser | dataFormat }}</span>
      </h2>
      <h2 class="trans-count">
        <span>本月注册企业：{{ monthlyCompany | dataFormat }}</span>
        <span>累计注册企业：{{ totalCompany | dataFormat }}</span>
      </h2>
      <div id="regCount"></div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import options from './RegCountData'
export default {
  data () {
    return {
      monthlyUser: 1811,
      monthlyCompany: 311,
      totalUser: 32290,
      totalCompany: 6322
    }
  },

  mounted () {
    const regCount = echarts.init(document.getElementById('regCount'))
    regCount.setOption(options)
  }
}
</script>
