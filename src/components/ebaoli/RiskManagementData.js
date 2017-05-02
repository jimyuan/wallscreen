import common from 'CHARTS/commonData'

const textStyle = common.textStyle

const backgroundColor = common.backgroundColor

const grid = [{
  show: true,
  containLabel: true,
  x: '5%',
  x2: '8%',
  y: '25%',
  y2: '30%',
  borderWidth: 0,
  backgroundColor
}]

const xAxis = [{
  type: 'value',
  splitNumber: 4,
  axisLine: {
    lineStyle: {
      color: common.lineColor
    }
  },
  axisTick: {
    show: true
  },
  axisLabel: {
    show: true
  },
  splitLine: {
    show: false
  }
}, {
  type: 'category',
  position: 'top',
  axisLine: {
    onZero: false,
    lineStyle: {
      color: common.lineColor
    }
  }
}]

const yAxis = [{
  type: 'category',
  boundaryGap: true,
  axisLine: {
    lineStyle: {
      color: common.lineColor
    }
  },
  axisTick: {
    show: false,
    alignWithLabel: true
  },
  data: ['']
}, {
  type: 'category',
  position: 'right',
  axisLine: {
    onZero: false,
    lineStyle: {
      color: common.lineColor
    }
  }
}]

const legend = [{
  orient: 'horizontal',
  x: '8%',
  y2: '6%',
  itemGap: common.item28,
  textStyle,
  tooltip: {
    show: false
  },
  selectedMode: false,
  data: ['当前在途', '在库质押']
}]

// 总成交量横向柱状图 data
const series = [{
  name: '当前在途',
  type: 'bar',
  itemStyle: {
    normal: {
      color: common.lineColor
    }
  },
  data: []
}, {
  name: '在库质押',
  type: 'bar',
  barWidth: '20%',
  barGap: '100%',
  data: []
}]

export default {
  color: ['#8dbd1b'],
  grid,
  legend,
  xAxis,
  yAxis,
  series
}
