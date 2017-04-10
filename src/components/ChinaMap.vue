<template>
  <div id="mapChart"></div>
</template>

<script>
import echarts from 'echarts'
import * as map from 'CHARTS/mapData'
import coords from 'CHARTS/geoCoordMap'
import motion from 'CHARTS/motionData'

export default {
  data () {
    return {
      limit: 5,
      seed: Math.random(),
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

  computed: {
    trailData () {
      let cities = this.cityData
      let cityStart = this.base
      let cityPicked = cities[this.seed * cities.length | 0]
      return {
        fromName: cityStart.name,
        toName: cityPicked.name,
        coords: [cityStart.value, cityPicked.value]
      }
    },

    cityData () {
      let cityPool = Object.keys(coords)
      let arr = Array(this.limit).fill(0).map(() => {
        let index = cityPool.length * this.seed | 0
        let city = cityPool.splice(index, 1)[0]
        return {
          name: city,
          value: coords[city]
        }
      })
      arr.push(this.base)
      return arr
    }
  },

  mounted () {
    // map
    const chinaMap = echarts.init(document.getElementById('mapChart'))
    let series = motion.concat(map.cityPoint)
    series[0].data = [this.trailData]
    series[1].data = [this.trailData]
    series[2].data = this.cityData
    // const geoEffect = [
    //   { data: [this.trailData] },
    //   { data: [this.trailData] },
    //   { data: this.cityData }
    // ]
    chinaMap.setOption({
      ...map.opts, series
    })
    // chinaMap.setOption({
    //   series: [{}, {}, Object.assign(series[2], {data: this.cityData})]
    // })
    window.setInterval(() => {
      this.seed = Math.random()
      series[0].data = [this.trailData]
      series[1].data = [this.trailData]
      series[2].data = this.cityData
      chinaMap.setOption({ series })
    }, 10000)
  },

  methods: {
    distance (a, b) {
      const c1 = coords[a]
      const c2 = coords[b]
      return Math.pow(Math.pow(c1[0] - c2[0], 2) + Math.pow(c1[1] - c2[1], 2), 0.5) | 0
    }
  }
}
</script>
