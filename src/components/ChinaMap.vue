<template>
  <div id="mapChart"></div>
</template>

<script>
import echarts from 'echarts'
import * as map from 'CHARTS/mapData'
import coords from 'CHARTS/geoCoordMap'

export default {
  mounted () {
    // map
    const chinaMap = echarts.init(document.getElementById('mapChart'))
    chinaMap.setOption({
      ...map.opts,
      series: map.series
    })
    this.addPoints(chinaMap, this.cityData)
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

<style lang="css">
</style>
