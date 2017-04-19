const lineColor = '#00b6ca'
const oddColor = '#172736'
const evenColor = '#1b2a3a'
export default {
  grid: [{
    show: true,
    containLabel: true,
    x: '5%',
    x2: '5%',
    y: '30%',
    y2: '5%',
    borderWidth: 0,
    backgroundColor: {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 1,
      y2: 0,
      colorStops: [{
        offset: 1 / 6, color: oddColor
      }, {
        offset: 1 / 6, color: evenColor
      }, {
        offset: 2 / 6, color: evenColor
      }, {
        offset: 2 / 6, color: oddColor
      }, {
        offset: 3 / 6, color: oddColor
      }, {
        offset: 3 / 6, color: evenColor
      }, {
        offset: 4 / 6, color: evenColor
      }, {
        offset: 4 / 6, color: oddColor
      }, {
        offset: 5 / 6, color: oddColor
      }, {
        offset: 5 / 6, color: evenColor
      }],
      globalCoord: false // 缺省为 false
    }
  }],
  xAxis: [{
    type: 'category',
    data: ['11月', '12月', '1月', '2月', '3月', '本月'],
    axisLine: {
      lineStyle: {
        color: lineColor
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
        color: lineColor
      }
    }
  }],
  yAxis: [{
    gridIndex: 0,
    type: 'value',
    splitNumber: 4,
    axisLine: {
      lineStyle: {
        color: lineColor
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
        color: lineColor
      }
    }
  }],
  series: [{
    name: '运输量',
    type: 'bar',
    barWidth: '40%',
    itemStyle: {
      normal: {
        color: lineColor
      }
    },
    data: [5.0, 14.9, 7.0, 23.2, 25.6, 16.7]
  }]
}
