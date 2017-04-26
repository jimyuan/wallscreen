<template>
  <div class="dash">
    <h1>风控</h1>
    <div class="board">
      <h2 class="trans-count">
        <span class="total">{{ legend[0] }}: {{ onGoing | dataFormat }} 吨</span>
        <span>{{ legend[1] }}: {{ onStore | dataFormat }} 吨</span>
      </h2>
      <div id="riskManagement" class="charts"></div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import options from './RiskManagementData'
import common from 'CHARTS/commonData'
export default {
  props: ['data'],

  data () {
    return {
      onGoing: this.data.riskmanageAnalysis.riskmanageOntheway,
      onStore: this.data.riskmanageAnalysis.riskmanageOnthestore,
      legend: ['当前在途', '在库质押']
    }
  },

  mounted () {
    const riskManagement = echarts.init(document.getElementById('riskManagement'))
    riskManagement.setOption(options)
    riskManagement.setOption({
      grid: [{
        backgroundColor: {
          colorStops: common.gradient(6, common.oddColor2, common.evenColor2)
        }
      }]
    })

    riskManagement.setOption({
      legend: [
        {data: this.legend}
      ],
      series: [
        {name: this.legend[0], data: [this.onGoing]},
        {name: this.legend[1], data: [this.onStore]}
      ]
    })
  }
}
</script>
