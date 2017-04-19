import common from 'CHARTS/commonData'
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
  }],
  xAxis: [{
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
  }],
  yAxis: [{
    type: 'value',
    splitNumber: 4,
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
  }],
  series: [{
    name: '运输量',
    type: 'bar',
    barWidth: '40%',
    itemStyle: {
      normal: {
        color: common.lineColor
      }
    },
    data: [5.0, 14.9, 7.0, 23.2, 25.6, 16.7]
  }]
}
