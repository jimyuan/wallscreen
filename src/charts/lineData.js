import common from 'CHARTS/commonData'

// const textStyle = common.textStyle

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
}]


export default {
  xAxis, yAxis, series
}
