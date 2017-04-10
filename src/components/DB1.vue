<template>
  <div class="dashboard">
    <h1>全网成交情况</h1>
    <article id="dash1"></article>
  </div>
</template>

<script>
import echarts from 'echarts'
import dashOpts from 'CHARTS/dashOneData'
import dataFormat from '../filters/dataFormat'

export default {
  data () {
    return {
      transCountMonth: 23591,
      transCountTotal: 788123
    }
  },
  mounted () {
    // dashboard-1
    const dash = echarts.init(document.getElementById('dash1'))
    dash.setOption(dashOpts)
    dash.setOption({title: {
      text: `本月累计运输量：${dataFormat(this.transCountMonth)}吨  累计运输总量： ${dataFormat(this.transCountTotal)}吨`
    }})
  }
}
</script>
