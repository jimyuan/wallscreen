<template>
  <div class="dashboard">
    <h1>成交用户分析</h1>
    <article id="dash2"></article>
  </div>
</template>

<script>
import echarts from 'echarts'
import dashOpts from 'CHARTS/dashTwoData'

export default {
  mounted () {
    // dashboard-2
    const dash = echarts.init(document.getElementById('dash2'))
    dash.setOption(dashOpts)
  }
}
</script>
