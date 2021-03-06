export default [{
  name: '城市',
  type: 'lines',
  zlevel: 1,
  effect: {
    show: true,
    period: 2,
    trailLength: 1,
    color: '#fff',
    symbolSize: 3
  },
  lineStyle: {
    normal: {
      color: 'transparent',
      width: 0,
      curveness: 0.4
    }
  }
}, {
  name: '城市',
  type: 'lines',
  zlevel: 2,
  symbol: ['none', 'arrow'],
  symbolSize: 10,
  effect: {
    show: true,
    period: 2,
    trailLength: 0,
    symbol: 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
    symbolSize: 15
  },
  lineStyle: {
    normal: {
      color: '#ffa022',
      width: 1,
      opacity: 0.6,
      curveness: 0.4
    }
  }
}]
