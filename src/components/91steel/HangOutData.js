import common from 'CHARTS/commonData'
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
    colorStops: [{
      offset: 1 / 6, color: common.oddColor
    }, {
      offset: 1 / 6, color: common.evenColor
    }, {
      offset: 2 / 6, color: common.evenColor
    }, {
      offset: 2 / 6, color: common.oddColor
    }, {
      offset: 3 / 6, color: common.oddColor
    }, {
      offset: 3 / 6, color: common.evenColor
    }, {
      offset: 4 / 6, color: common.evenColor
    }, {
      offset: 4 / 6, color: common.oddColor
    }, {
      offset: 5 / 6, color: common.oddColor
    }, {
      offset: 5 / 6, color: common.evenColor
    }]
  }
}, {
  show: true,
  containLabel: true,
  x: '7%',
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
    colorStops: [{
      offset: 1 / 6, color: common.oddColor2
    }, {
      offset: 1 / 6, color: common.evenColor2
    }, {
      offset: 2 / 6, color: common.evenColor2
    }, {
      offset: 2 / 6, color: common.oddColor2
    }, {
      offset: 3 / 6, color: common.oddColor2
    }, {
      offset: 3 / 6, color: common.evenColor2
    }, {
      offset: 4 / 6, color: common.evenColor2
    }, {
      offset: 4 / 6, color: common.oddColor2
    }, {
      offset: 5 / 6, color: common.oddColor2
    }, {
      offset: 5 / 6, color: common.evenColor2
    }]
  }
}]

const xAxis = [{
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
}, {
  type: 'value',
  gridIndex: 1,
  splitNumber: 4,
  min: 200,
  axisLine: {
    lineStyle: {
      color: common.lineColor
    }
  },
  axisTick: {
    show: false
  },
  axisLabel: {
    show: false
  },
  splitLine: {
    show: true,
    lineStyle: {
      color: '#11202f'
    }
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

const yAxis = [{
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
}, {
  type: 'category',
  gridIndex: 1,
  data: ['', '', ''],
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
  x: '7%',
  y2: '10%',
  itemGap: 7,
  textStyle: {
    color: '#fff'
  },
  tooltip: {
    show: false
  },
  selectedMode: false,
  data: ['成交量', '结算量']
}]

const series = [{
  name: '成交量',
  type: 'bar',
  barWidth: '35%',
  barGap: '20%',
  xAxisIndex: 2,
  yAxisIndex: 2,
  itemStyle: {
    normal: {
      color: common.lineColor
    }
  },
  data: [{
    name: '成交量',
    value: 380
  }, {
    name: '结算量',
    value: 830,
    itemStyle: {
      normal: {
        color: '#8dbd1b'
      }
    }
  }]
}, {
  name: '结算量',
  type: 'bar',
  xAxisIndex: 2,
  yAxisIndex: 2,
  itemStyle: {
    normal: {
      color: '#8dbd1b'
    }
  }
}]

export default {
  grid,
  xAxis,
  yAxis,
  legend,
  series: [{
    name: '总挂牌量',
    type: 'line',
    symbol: 'circle',
    symbolSize: 6,
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
  }].concat(series)
}
