export default {
  backgroundColor: 'rgba(1,42,71,0.8)',
  color: ['#0096c1', '#c97b26', '#109445', '#f8b226', '#c69d60', '#8dbd1b'],
  legend: {
    orient: 'vertical',
    x2: '5%',
    y: '10%',
    textStyle: {
      color: '#fff'
    },
    tooltip: {
      show: false
    },
    selectedMode: false
  },
  series: [{
    name: '货物类型分析',
    hoverAnimation: false,
    type: 'pie',
    radius: ['30%', '70%'],
    center: ['20%', '50%'],
    label: {
      normal: {
        show: false
      }
    }
  }]
}
