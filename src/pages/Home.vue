<template>
  <section>
    <div id="mainChart"></div>
    <div class="dash-group">
      <div class="dashboard">
        <h1>全网成交情况</h1>
        <article id="dash1"></article>
      </div>
      <div class="dashboard">
        <h1>成交用户分析</h1>
        <article></article>
      </div>
      <div class="dashboard">
        <h1>渠道销售排行</h1>
        <article></article>
      </div>
      <div class="dashboard">
        <h1>货物类型分析</h1>
        <article></article>
      </div>
    </div>
  </section>
</template>

<script>
import echarts from 'echarts'
import * as map from 'CHARTS/mapData'
import coords from 'CHARTS/geoCoordMap'
import dash1Opts from 'CHARTS/dashOneData'

export default {
  data () {
    return {
    }
  },

  mounted () {
    // map
    const chinaMap = echarts.init(document.getElementById('mainChart'))
    chinaMap.setOption({
      ...map.opts,
      series: map.series
    })
    this.addPoints(chinaMap, this.cityData)

    // dashboard-1
    const dash1 = echarts.init(document.getElementById('dash1'))
    dash1.setOption(dash1Opts)
  },

  computed: {
    cityData () {
      let cityPool = Object.keys(coords)
      return Array(10).fill(0).map(() => {
        let index = cityPool.length * Math.random() | 0
        let city = cityPool.splice(index, 1)[0]
        return {
          name: city,
          value: coords[city]
        }
      })
    }
  },

  methods: {
    addPoints (chart, data) {
      chart.setOption({
        series: [{
          data: data
        }]
      })
    }
  }
}
</script>
