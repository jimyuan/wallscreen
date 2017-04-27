import common from 'CHARTS/commonData'

const textStyle = common.textStyle

export default {
  color: common.colorArr,
  legend: [{
    orient: 'vertical',
    itemWidth: 14,
    textStyle: {
      ...textStyle,
      fontFamily: 'monospace'
    },
    tooltip: {
      show: false
    },
    selectedMode: false,
    data: []
  }],
  series: [{
    hoverAnimation: false,
    type: 'pie',
    startAngle: 0,
    label: {
      normal: {
        show: false
      }
    },
    data: []
  }]
}
