<template>
  <div class="dashboard">
    <h1>货物类型分析</h1>
    <article id="dash4"></article>
  </div>
</template>

<script>
import echarts from 'echarts'
import dash1Opts from 'CHARTS/dashOneData'

export default {
  mounted () {
    // dashboard-1
    const dash1 = echarts.init(document.getElementById('dash1'))
    dash1.setOption(dash1Opts)
  }
}
</script>
