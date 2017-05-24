// 城市点定义
const cityPoint = {
  name: '城市',
  type: 'effectScatter',
  coordinateSystem: 'geo',
  symbolSize: 10,
  zlevel: 3,
  effectType: 'ripple',
  rippleEffect: {
    period: 2,
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
}

// 实线轨迹
const trackLine = {
  type: 'lines',
  zlevel: 1,
  effect: {
    show: true,
    period: 10,
    trailLength: 1,
    color: '#ffa022',
    symbolSize: 3
  },
  lineStyle: {
    normal: {
      color: 'transparent',
      width: 0,
      curveness: 0.4
    }
  },
  data: []
}

// 虚线轨迹
const trackPiont = {
  type: 'lines',
  zlevel: 2,
  symbol: ['none', 'arrow'],
  symbolSize: 12,
  effect: {
    show: true,
    period: 10,
    trailLength: 0,
    symbol: 'triangle',
    color: 'rgba(255, 255, 255, 0.8)',
    symbolSize: 15
  },
  lineStyle: {
    normal: {
      color: '#ffa022',
      type: 'dotted',
      width: 2,
      opacity: 0.8,
      curveness: 0.4
    }
  },
  data: []
}

export default {
  backgroundColor: 'transparent',
  geo: {
    map: 'china',
    x: '16%',
    y: '13%',
    zoom: 0.9,
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
  series: [ trackPiont, trackLine, cityPoint ]
}
