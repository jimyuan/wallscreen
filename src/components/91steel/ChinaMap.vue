<template>
  <div class="charts map-zone" id="chinaMap"></div>
</template>

<script>
import echarts from 'echarts'
import options from './ChinaMapData'
import dataFormat from 'FILTERS/dataFormat'
export default {
  props: ['data'],

  data () {
    return {
      cityArray: options.series[0].data.map(item => item.name),
      index: 0
    }
  },

  computed: {
    tradeData () {
      return this.data
    },

    tradeOrder () {
      return this.tradeData[this.index]
    },

    cityIndex () {
      return this.cityArray.indexOf(this.tradeOrder.cityName)
    },

    lastCityIndex () {
      const lastCity = this.data.slice(-1)[0].cityName
      return this.cityArray.indexOf(lastCity)
    }
  },

  watch: {
    tradeData () {
      this.index = 0
    }
  },

  methods: {
    showTradeTip (instance) {
      if (this.tradeOrder) {
        instance.setOption({
          tooltip: {
            formatter: `${this.tradeOrder.tradeTime}<br>
            ${this.tradeOrder.productTypeName}成交 <span class="tip-text">${dataFormat(this.tradeOrder.tradeAmount)}</span> 吨<br>
            成交金额 <span class="tip-text">${dataFormat(this.tradeOrder.tradeMoney)}</span> 元
            <i class="triangle"></i>`
          }
        })
        instance.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: this.cityIndex
        })
        this.index ++
      }
    }
  },

  mounted () {
    const chinaMap = echarts.init(document.getElementById('chinaMap'))
    chinaMap.setOption(options)
    setInterval(() => {
      this.showTradeTip(chinaMap)
    }, 2500)
  }
}
</script>
