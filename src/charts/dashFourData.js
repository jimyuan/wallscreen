export default {
  backgroundColor: '#012a47',
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
