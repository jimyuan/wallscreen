<template>
  <div class="charts map-zone" id="chinaMap"></div>
</template>

<script>
import echarts from 'echarts'
import options from './ChinaMapData'
import dataFormat from 'FILTERS/dataFormat'
export default {
  data () {
    return {

    }
  },
  mounted () {
    const chinaMap = echarts.init(document.getElementById('chinaMap'))
    chinaMap.setOption(options)
    // const cityData = chinaMap.getOption().series[0].data

    setInterval(function () {
      let index = 6 * Math.random() | 0
      chinaMap.dispatchAction({
        type: 'hideTip',
        seriesIndex: 0,
        dataIndex: index
      })
      chinaMap.setOption({
        tooltip: {
          formatter: `10:20:20<br>
          螺纹管成交 <span class="tip-text">${dataFormat(332)}</span> 吨<br>
          成交金额 <span class="tip-text">${dataFormat(234343)}</span> 元
          <i class="triangle"></i>`
        }
      })
      chinaMap.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: index
      })
    }, 2000)
  }
}
</script>
