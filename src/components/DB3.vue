<template>
  <div class="dashboard">
    <h1>渠道销售排行</h1>
    <article id="dash3"></article>
  </div>
</template>

<script>
import echarts from 'echarts'
import dashOpts from 'CHARTS/dashThreeData'

export default {
  mounted () {
    // dashboard-3
    const dash = echarts.init(document.getElementById('dash3'))
    dash.setOption(dashOpts)
  }
}
</script>
