<template>
  <div class="dash">
    <h1>筹资渠道</h1>
    <div class="board">
      <div id="financeChannel" class="charts"></div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import dataFormat from 'FILTERS/dataFormat'
import options from './FinanceChannelData'
export default {
  props: ['data'],

  data () {
    return {
      pieData: this.data.raiseChannelAnalysis.map(item => ({
        name: item.raiseChannelName,
        value: item.raiseChannelMoney
      }))
    }
  },

  mounted () {
    const financeChannel = echarts.init(document.getElementById('financeChannel'))
    financeChannel.setOption(options)
    financeChannel.setOption({
      series: {
        label: {
          normal: {
            formatter ({name, value, percent}) {
              return `${name} (${percent}%, ${dataFormat(value)}万元)`
            }
          }
        },
        data: this.pieData
      }
    })
  }
}
</script>
