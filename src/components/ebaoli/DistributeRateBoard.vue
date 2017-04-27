<template>
  <div class="dash">
    <h1>大智运配送比</h1>
    <div class="board">
      <div id="distributeRate" class="charts"></div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import dataFormat from 'FILTERS/dataFormat'
import options from './DistributeRateData'
export default {
  props: ['data'],

  data () {
    return {
      pieData: this.data.shippingScaleAnalysis.map(item => ({
        name: item.shippingScaleName,
        value: item.shippingScaleAmount
      }))
    }
  },

  mounted () {
    const distributeRate = echarts.init(document.getElementById('distributeRate'))
    distributeRate.setOption(options)
    distributeRate.setOption({
      series: {
        label: {
          normal: {
            formatter ({name, value, percent}) {
              return `${name} (${percent}%, ${dataFormat(value)}吨)`
            }
          }
        },
        data: this.pieData
      }
    })
  }
}
</script>
