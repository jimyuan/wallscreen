<template>
  <div id="mapChart"></div>
</template>

<script>
import echarts from 'echarts'
import * as map from 'CHARTS/mapData'
import coords from 'CHARTS/geoCoordMap'

export default {
  data () {
    return {
      limit: 10,
      base: {
        name: '上海',
        value: coords['上海'],
        itemStyle: {
          normal: {
            color: 'orange'
          }
        }
      }
    }
  },

  mounted () {
    // map
    const chinaMap = echarts.init(document.getElementById('mapChart'))
    chinaMap.setOption({
      ...map.opts,
      series: map.series
    })
    chinaMap.setOption({
      series: [{ data: this.cityData() }]
    })
    window.setInterval(() => {
      // this.addPoints(chinaMap, this.cityData())
    }, 5000)
  },

  methods: {
    cityData () {
      let cityPool = Object.keys(coords)
      return Array(this.limit).fill(0).map(() => {
        let index = cityPool.length * Math.random() | 0
        let city = cityPool.splice(index, 1)[0]
        return {
          name: city,
          value: coords[city]
        }
      }).concat(this.base)
    },

    distance (a, b) {
      const c1 = coords[a]
      const c2 = coords[b]
      const x1 = c1[0]
      const x2 = c2[0]
      const y1 = c1[1]
      const y2 = c2[1]
      return Math.pow(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2), 0.5) | 0
    }
  }
}
</script>

<style lang="css">
</style>
