import common from 'CHARTS/commonData'

const grid = [{
  show: true,
  containLabel: true,
  x: '3%',
  x2: '8%',
  y: '5%',
  y2: '18%',
  borderWidth: 0
}]

const xAxis = [{
  type: 'value',
  axisLine: {
    show: true,
    lineStyle: {
      color: common.lineColor
    }
  },
  axisTick: {
    show: true
  },
  axisLabel: {
    show: true,
    textStyle: {
      color: common.lineColor
    }
  },
  splitLine: {
    show: false
  }
}]

const yAxis = [{
  type: 'category',
  boundaryGap: true,
  axisLine: {
    show: false
  },
  axisLabel: {
    show: true,
    textStyle: {
      color: common.lineColor
    }
  },
  data: ['西北', '西南', '北方', '华东', '南方']
}]

const legend = [{
  orient: 'horizontal',
  x: '10%',
  y2: '3%',
  itemGap: common.view(27),
  textStyle: {
    color: '#fff',
    fontSize: common.view(16)
  },
  tooltip: {
    show: false
  },
  selectedMode: false,
  data: ['挂牌量', '成交量']
}]

// 总成交量横向柱状图 data
const series = [{
  name: '挂牌量',
  type: 'bar',
  itemStyle: {
    normal: {
      color: common.lineColor
    }
  },
  data: [1120, 990, 1500, 810, 1000]
}, {
  name: '成交量',
  type: 'bar',
  barGap: '0',
  data: [1000, 800, 1250, 600, 690]
}]

export default {
  color: ['#8dbd1b'],
  grid,
  xAxis,
  yAxis,
  legend,
  series
}
