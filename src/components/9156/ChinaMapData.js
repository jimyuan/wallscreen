import 'echarts/map/js/china'
import geoData from 'CHARTS/geoData'

const geo9156 = geoData['9156']
const label = {
  normal: {
    show: true,
    textStyle: {
      color: '#fff'
    }
  }
}
const provinceData = geoData.province.map(prov => ({
  name: prov, label
}))
const cityPoint = {
  name: '城市',
  type: 'effectScatter',
  coordinateSystem: 'geo',
  symbolSize: 4,
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
  data: Object.keys(geo9156).map(city => ({
    value: geo9156[city]
  }))
}

export default {
  backgroundColor: 'transparent',
  geo: {
    map: 'china',
    x: '16%',
    y: '13%',
    zoom: 1.1,
    roam: false,
    z: 3,
    itemStyle: {
      normal: {
        areaColor: 'transparent',
        borderColor: '#00c7ff'
      }
    },
    regions: provinceData,
    silent: true
  },
  series: [ cityPoint ]
}
