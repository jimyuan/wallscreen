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
}]

const yAxis = [{
  type: 'value',
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
  position: 'top',
  axisLine: {
    onZero: false,
    lineStyle: {
      color: common.lineColor
    }
  }
}]

const legend = [{
  orient: 'vertical',
  x: '15%',
  y: '55%',
  itemGap: common.view(10),
  textStyle: {
    color: '#fff',
    fontSize: common.view(16)
  },
  tooltip: {
    show: false
  },
  selectedMode: false,
  data: ['PC端', '移动端']
}, {
  orient: 'vertical',
  x: '65%',
  y: '55%',
  itemGap: common.view(10),
  textStyle: {
    color: '#fff',
    fontSize: common.view(16)
  },
  tooltip: {
    show: false
  },
  selectedMode: false,
  data: ['钢厂数', '终端数']
}]

const series = [{
  name: '客户端',
  type: 'pie',
  z: 3,
  hoverAnimation: false,
  radius: ['20%', '30%'],
  center: ['25%', '83%'],
  label: {
    normal: false
  },
  data: [{
    value: 335,
    name: 'PC端',
    itemStyle: {
      normal: {
        color: '#8dbd1b'
      }
    }
  }, {
    value: 810,
    name: '移动端',
    itemStyle: {
      normal: {
        color: '#0096c1'
      }
    }
  }]
}, {
  hoverAnimation: false,
  name: '客户端',
  type: 'pie',
  radius: [0, '21%'],
  center: ['25%', '83%'],
  label: {
    normal: {
      show: true,
      position: 'inside',
      formatter (obj) { return `${obj.percent.toFixed()}%` },
      textStyle: {
        fontSize: common.view(13)
      }
    }
  },
  itemStyle: {
    normal: {
      color: 'transparent',
      borderColor: '#fff'
    }
  },
  data: [{
    value: 335,
    name: 'PC端'
  }, {
    value: 810,
    name: '移动端'
  }]
}, {
  name: '企业数量',
  hoverAnimation: false,
  type: 'pie',
  z: 3,
  radius: ['20%', '30%'],
  center: ['75%', '83%'],
  label: {
    normal: false
  },
  data: [{
    value: 1035,
    name: '钢厂数',
    itemStyle: {
      normal: {
        color: '#f8b226'
      }
    }
  }, {
    value: 1548,
    name: '终端数',
    itemStyle: {
      normal: {
        color: '#e74127'
      }
    }
  }]
}, {
  name: '企业数量',
  hoverAnimation: false,
  type: 'pie',
  radius: [0, '21%'],
  center: ['75%', '83%'],
  label: {
    normal: {
      show: true,
      position: 'inside',
      formatter (obj) { return `${obj.percent.toFixed()}%` },
      textStyle: {
        fontSize: common.view(13)
      }
    }
  },
  itemStyle: {
    normal: {
      color: 'transparent',
      borderColor: '#fff'
    }
  },
  data: [{
    value: 1035,
    name: '钢厂数'
  }, {
    value: 1548,
    name: '终端数'
  }]
}]

export default {
  grid,
  xAxis,
  yAxis,
  legend,
  series: [{
    name: '运输量',
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
