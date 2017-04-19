<template>
  <div class="map-zone" id="chinaMap"></div>
</template>

<script>
import echarts from 'echarts'
import options from './ChinaMapData'
export default {
  mounted () {
    const chinaMap = echarts.init(document.getElementById('chinaMap'))
    chinaMap.setOption(options)
  }
}
</script>
