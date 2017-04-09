export default {
  backgroundColor: 'rgba(1,42,71,0.8)',
  title: {
    text: '本月累计运输量：23,556吨  累计运输总量： 788,331吨',
    textAlign: 'left',
    x: '8%',
    y: '5%',
    textStyle: {
      color: '#fff',
      fontSize: 16
    }
  },
  grid: {
    show: true,
    containLabel: true,
    x: '5%',
    x2: '5%',
    y: '20%',
    y2: '5%',
    borderColor: '#112533',
    borderWidth: 1,
    backgroundColor: '#1b2f3d'
  },
  xAxis: [{
    type: 'category',
    data: ['11月', '12月', '1月', '2月', '3月', '本月'],
    axisLine: {
      lineStyle: {
        color: '#00b6ca'
      }
    }
  }],
  yAxis: [{
    type: 'value',
    axisLine: {
      lineStyle: {
        color: '#00b6ca'
      }
    }
  }],
  series: [{
    name: '运输量',
    type: 'bar',
    barWidth: '40%',
    itemStyle: {
      normal: {
        color: '#00b6ca'
      }
    },
    data: [5.0, 14.9, 7.0, 23.2, 25.6, 56.7]
  }]
}
