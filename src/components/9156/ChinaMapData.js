import 'echarts/map/js/china'

// const geo9156 = geoData['9156']
const cityPoint = {
  name: '城市',
  type: 'effectScatter',
  coordinateSystem: 'geo',
  symbolSize: 6,
  zlevel: 3,
  effectType: 'ripple',
  rippleEffect: {
    brushType: 'stroke',
    scale: 3
  },
  label: {
    normal: {
      show: true,
      position: 'right',
      formatter: '{b}',
      textStyle: {
        color: '#fff'
      }
    }
  },
  itemStyle: {
    normal: {
      color: '#00c7ff',
      borderColor: '#fff',
      borderType: 'solid',
      borderWidth: 1
    }
  },
  data: []
  // data: Object.keys(geo9156).map(city => ({
  //   value: geo9156[city]
  // }))
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
    silent: true
  },
  series: [ cityPoint ]
}
