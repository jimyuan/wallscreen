export default {
  backgroundColor: '#012a48',
  xAxis: [{
    type: 'category',
    data: ['11月', '12月', '1月', '2月', '3月', '4月'],
    axisLine: {
      lineStyle: {
        color: '#fff'
      }
    }
  }],
  yAxis: [{
    type: 'value',
    axisLine: {
      lineStyle: {
        color: '#fff'
      }
    },
    axisLabel: {
      inside: true
    }
  }],
  series: [{
    name: '运输量',
    type: 'bar',
    data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7]
  }]
}
