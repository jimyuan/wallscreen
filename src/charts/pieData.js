import common from 'CHARTS/commonData'

const textStyle = common.textStyle

export default {
  color: common.colorArr,
  legend: [{
    orient: 'vertical',
    textStyle,
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
