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

export const series = [{
  name: '城市',
  hoverAnimation: false,
  legendHoverLink: false,
  type: 'scatter',
  coordinateSystem: 'geo',
  effectType: 'ripple',
  symbolSize: 14,
  label: {
    normal: {
      show: true,
      position: [20, -3],
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
}]
