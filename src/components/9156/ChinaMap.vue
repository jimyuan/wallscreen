<template>
  <div class="map-zone" id="transportMap"></div>
</template>

<script>
import echarts from 'echarts'
import options from './ChinaMapData'
import geoData from 'CHARTS/geoData'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      fromCity: '',
      toCity: '',
      chinaMap: {}
    }
  },
  computed: mapState({
    order: state => state.order
  }),

  watch: {
    order () {
      this.fromCity = this.order.route.split('-')[0]
      this.toCity = this.order.route.split('-')[1]
      this.routePath()
    }
  },

  methods: {
    routePath () {
      this.chinaMap.setOption({
        series: [{
          data: [{
            coords: [
              geoData['9156'][this.fromCity],
              geoData['9156'][this.toCity]
            ]
          }]
        }, {
          data: [{
            value: geoData['9156'][this.fromCity],
            name: this.fromCity
          }, {
            value: geoData['9156'][this.toCity],
            name: this.toCity
          }]
        }]
      })
    }
  },

  mounted () {
    this.chinaMap = echarts.init(document.getElementById('transportMap'))
    this.chinaMap.setOption(options)
  }
}
</script>
