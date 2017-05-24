<template>
  <div class="dash">
    <h1>筹资渠道</h1>
    <div class="board">
      <div id="financeChannel" class="charts"></div>
    </div>
  </div>
</template>

<script>
import options from './FinanceChannelData'
import dataFormat from 'FILTERS/dataFormat'
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
    /* eslint-disable no-undef */
    const financeChannel = echarts.init(document.getElementById('financeChannel'))
    financeChannel.setOption(options)
    financeChannel.setOption({
      series: {
        data: this.pieData,
        label: {
          normal: {
            formatter ({name, value, percent}) {
              return `${name}\n{${percent}%, ${dataFormat(value)}家}`
            }
          }
        }
      }
    })
  }
}
</script>
