import common from 'CHARTS/commonData'
import lineData from 'CHARTS/lineData'

const textStyle = common.textStyle

const backgroundColor = common.backgroundColor

const grid = [{
  show: true,
  containLabel: true,
  x: '2%',
  x2: '8%',
  y: '20%',
  y2: '50%',
  borderWidth: 0,
  backgroundColor
}, {
  show: true,
  containLabel: true,
  x: '8%',
  x2: '8%',
  y: '65%',
  y2: '15%',
  borderWidth: 0,
  backgroundColor
}]

const xAxis1 = lineData.xAxis

const xAxis2 = [{
  type: 'value',
  gridIndex: 1,
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
  gridIndex: 1,
  position: 'top',
  axisLine: {
    onZero: false,
    lineStyle: {
      color: common.lineColor
    }
  }
}]

const yAxis1 = lineData.yAxis

const yAxis2 = [{
  type: 'category',
  gridIndex: 1,
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
  gridIndex: 1,
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
  data: ['成交量', '结算量']
}]

// 总挂牌量曲线图
const seriesLine = lineData.series

// 总成交量横向柱状图 data
const seriesBar = [{
  name: '成交量',
  type: 'bar',
  xAxisIndex: 2,
  yAxisIndex: 2,
  itemStyle: {
    normal: {
      color: common.lineColor
    }
  },
  data: []
}, {
  name: '结算量',
  type: 'bar',
  barWidth: '20%',
  barGap: '100%',
  xAxisIndex: 2,
  yAxisIndex: 2,
  data: []
}]

export default {
  color: ['#8dbd1b'],
  grid,
  legend,
  xAxis: xAxis1.concat(xAxis2),
  yAxis: yAxis1.concat(yAxis2),
  series: seriesLine.concat(seriesBar)
}
