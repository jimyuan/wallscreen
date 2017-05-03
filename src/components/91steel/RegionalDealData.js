import common from 'CHARTS/commonData'

const textStyle = common.textStyle

const grid = [{
  show: true,
  containLabel: true,
  x: '3%',
  x2: '10%',
  y: '5%',
  y2: '18%',
  borderWidth: 0
}]

const xAxis = [{
  type: 'value',
  nameTextStyle: {
    color: '#fff'
  },
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
  data: []
}]

const legend = [{
  orient: 'horizontal',
  x: '10%',
  y2: '3%',
  itemGap: common.item28,
  textStyle,
  tooltip: {
    show: false
  },
  selectedMode: false,
  data: []
}]

// 总成交量横向柱状图 data
const series = [{
  name: '',
  type: 'bar',
  itemStyle: {
    normal: {
      color: common.lineColor
    }
  },
  data: []
}, {
  name: '',
  type: 'bar',
  barGap: '0',
  data: []
}]

export default {
  color: ['#8dbd1b'],
  grid,
  xAxis,
  yAxis,
  legend,
  series
}
