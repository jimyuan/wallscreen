import 'echarts/map/js/china'

export const opts = {
  backgroundColor: 'transparent',
  geo: {
    map: 'china',
    x: '6%',
    zoom: 0.8,
    itemStyle: {
      normal: {
        areaColor: 'transparent',
        borderColor: '#00c7ff'
      }
    },
    silent: true
  }
}

export const cityPoint = {
  name: '城市',
  hoverAnimation: false,
  legendHoverLink: false,
  type: 'effectScatter',
  coordinateSystem: 'geo',
  effectType: 'ripple',
  symbolSize: 6,
  rippleEffect: {
    brushType: 'stroke'
  },
  label: {
    normal: {
      show: true,
      position: [-30, -10],
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
  }
}
