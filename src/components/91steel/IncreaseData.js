import common from 'CHARTS/commonData'
const grid = [{
  show: true,
  containLabel: true,
  x: '2%',
  x2: '8%',
  y: '25%',
  y2: '8%',
  borderWidth: 0,
  backgroundColor: {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 1,
    y2: 0,
    colorStops: common.gradient(6, common.oddColor, common.evenColor)
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
  name: '单位：万元',
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
  position: 'top',
  axisLine: {
    onZero: false,
    lineStyle: {
      color: common.lineColor
    }
  }
}]

const series = [{
  name: '运输量',
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

export default {
  grid,
  xAxis,
  yAxis,
  series
}
