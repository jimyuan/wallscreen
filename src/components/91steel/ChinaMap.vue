<template>
  <div class="charts map-zone" id="dealMap"></div>
</template>

<script>
import options from './ChinaMapData'
import dataFormat from 'FILTERS/dataFormat'
import { mapState } from 'vuex'
export default {
  props: ['data'],

  data () {
    return {
      cityArray: options.series[0].data.map(item => item.name),
      chinaMap: {},
      index: 0
    }
  },

  computed: {
    ...mapState({
      rollTime: state => state.rollTime
    }),

    tradeData () {
      return this.data
    },

    tradeOrder () {
      return this.tradeData[this.index]
    },

    cityIndex () {
      return this.cityArray.indexOf(this.tradeOrder.ctiyName)
    },

    lastCityIndex () {
      const lastCity = this.data.slice(-1)[0].cityName
      return this.cityArray.indexOf(lastCity)
    }
  },

  watch: {
    tradeData () {
      this.index = 0
      this.showTradeTip()
    }
  },

  methods: {
    showTradeTip () {
      if (this.tradeOrder) {
        this.chinaMap.setOption({
          tooltip: {
            formatter: `${this.tradeOrder.tradeTime}<br>
            ${this.tradeOrder.productTypeName}成交 <span class="tip-text">${dataFormat(this.tradeOrder.tradeAmount)}</span> 吨<br>
            成交金额 <span class="tip-text">${dataFormat(this.tradeOrder.tradeMoney)}</span> 元
            <i class="triangle"></i>`
          }
        })
        this.chinaMap.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: this.cityIndex
        })
        this.index ++
      } else {
        this.index = 0
      }
    }
  },

  mounted () {
    /* eslint-disable no-undef */
    this.chinaMap = echarts.init(document.getElementById('dealMap'))
    this.chinaMap.setOption(options)
    setInterval(this.showTradeTip, this.rollTime)
  }
}
</script>
