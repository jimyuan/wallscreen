import 'echarts/map/js/china'
import geoData from 'CHARTS/geoData'

const geo91steel = geoData['91steel']
const label = {
  normal: {
    show: true,
    position: [-10, -25],
    formatter: '{b}',
    textStyle: {
      color: '#fff'
    }
  }
}
const cityPoint = {
  name: '城市',
  type: 'effectScatter',
  coordinateSystem: 'geo',
  symbolSize: 10,
  effectType: 'ripple',
  rippleEffect: {
    brushType: 'stroke',
    scale: 3
  },
  itemStyle: {
    normal: {
      color: '#00c7ff',
      borderColor: '#fff',
      borderType: 'solid',
      borderWidth: 1
    }
  },
  label,
  data: Object.keys(geo91steel).map(city => ({
    name: city,
    value: geo91steel[city]
  }))
}

export default {
  backgroundColor: 'transparent',
  geo: {
    map: 'china',
    zoom: 1.1,
    itemStyle: {
      normal: {
        areaColor: 'transparent',
        borderColor: '#00c7ff'
      }
    },
    silent: true
  },
  series: [ cityPoint ]
}
