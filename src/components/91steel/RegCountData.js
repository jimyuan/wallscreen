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
    y2: 0
  }
}]

const xAxis = [{
  type: 'category',
  axisLine: {
    lineStyle: {
      color: common.lineColor
    }
  },
  axisTick: {
    show: false
  },
  data: []
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
  itemGap: common.item10,
  textStyle,
  tooltip: {
    show: false
  },
  selectedMode: false,
  data: []
}, {
  orient: 'vertical',
  x: '65%',
  y: '55%',
  itemGap: common.item10,
  textStyle,
  tooltip: {
    show: false
  },
  selectedMode: false,
  data: []
}]

// 2 个环形饼图数据
const seriesPie = [{
  name: '客户端',
  type: 'pie',
  z: 3,
  hoverAnimation: false,
  radius: ['20%', '30%'],
  center: ['25%', '83%'],
  label: {
    normal: false
  },
  data: []
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
        fontSize: common.font13
      }
    }
  },
  itemStyle: {
    normal: {
      color: 'transparent',
      borderColor: '#fff'
    }
  },
  data: []
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
  data: []
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
        fontSize: common.font13
      }
    }
  },
  itemStyle: {
    normal: {
      color: 'transparent',
      borderColor: '#fff'
    }
  },
  data: []
}]

const seriesLine = [{
  name: '注册用户',
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
  data: []
}, {
  name: '注册企业',
  type: 'line',
  symbol: 'circle',
  symbolSize: common.symbol8,
  itemStyle: {
    normal: {
      color: '#f8b226'
    }
  },
  lineStyle: {
    normal: {
      color: '#f8b226',
      width: 1,
      type: 'dashed'
    }
  },
  data: []
}]

export default {
  color: ['#8dbd1b', '#0096c1', '#f8b226', '#e74127'],
  grid,
  xAxis,
  yAxis,
  legend,
  series: seriesLine.concat(seriesPie)
}
