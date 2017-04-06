<template>
  <div class="dashboard">
    <h1>全网成交情况</h1>
    <article id="dash1"></article>
  </div>
</template>

<script>
import echarts from 'echarts'
import dashOpts from 'CHARTS/dashOneData'

export default {
  mounted () {
    // dashboard-1
    const dash = echarts.init(document.getElementById('dash1'))
    dash.setOption(dashOpts)
  }
}
</script>
