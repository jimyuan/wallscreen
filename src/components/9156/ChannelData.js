import common from 'CHARTS/commonData'

const textStyle = common.textStyle

export default {
  color: common.colorArr,
  legend: [{
    orient: 'vertical',
    x: '50%',
    y: '17%',
    textStyle,
    itemGap: common.item10,
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
    radius: '60%',
    center: ['20%', '50%'],
    label: {
      normal: {
        show: false
      }
    },
    data: []
  }]
}
