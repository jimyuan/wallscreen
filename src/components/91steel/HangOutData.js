import common from 'CHARTS/commonData'

const textStyle = common.textStyle

const grid = [{
  show: true,
  containLabel: true,
  x: '2%',
  x2: '8%',
  y: '20%',
  y2: '50%',
  borderWidth: 0,
  backgroundColor: {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 1,
    y2: 0,
    colorStops: common.gradient(6, common.oddColor, common.evenColor)
  }
}, {
  show: true,
  containLabel: true,
  x: '8%',
  x2: '8%',
  y: '65%',
  y2: '15%',
  borderWidth: 0,
  backgroundColor: {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 1,
    y2: 0,
    colorStops: common.gradient(6, common.oddColor2, common.evenColor2)
  }
}]

const xAxis1 = [{
  type: 'category',
  data: ['11月', '12月', '1月', '2月', '3月', '本月'],
  axisLine: {
    lineStyle: {
      color: common.lineColor
    }
  },
  axisTick: {
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

const yAxis1 = [{
  type: 'value',
  splitNumber: 4,
  min: 200,
  name: '单位：万吨',
  nameTextStyle: {
    color: '#fff'
  },
  axisLine: {
    lineStyle: {
      color: common.lineColor
    }
  },
  axisTick: {
    show: false
  },
  axisLabel: {
    textStyle: {
      fontSize: 10
    }
  },
  splitLine: {
    show: true,
    lineStyle: {
      color: '#11202f'
    }
  }
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
const seriesLine = [{
  name: '总挂牌量',
  type: 'line',
  symbol: 'circle',
  symbolSize: common.symbol8,
  itemStyle: {
    normal: {
      color: common.lineColor
    }
  },
  lineStyle: {
    normal: {
      color: '#3b8378',
      width: 1,
      type: 'dashed'
    }
  },
  data: [300, 450, 660, 520, 700, 830]
}]

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
  data: [380]
}, {
  name: '结算量',
  type: 'bar',
  barWidth: '20%',
  barGap: '100%',
  xAxisIndex: 2,
  yAxisIndex: 2,
  data: [830]
}]

export default {
  color: ['#8dbd1b'],
  grid,
  xAxis: xAxis1.concat(xAxis2),
  yAxis: yAxis1.concat(yAxis2),
  legend,
  series: seriesLine.concat(seriesBar)
}
