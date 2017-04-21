import common from 'CHARTS/commonData'

const textStyle = common.textStyle

export default {
  color: common.colorArr,
  legend: [{
    orient: 'vertical',
    x: '60%',
    y: '30%',
    textStyle,
    tooltip: {
      show: false
    },
    itemGap: common.item16,
    selectedMode: false,
    data: []
  }],
  series: [{
    name: '渠道销售排行',
    hoverAnimation: false,
    type: 'pie',
    startAngle: 0,
    radius: '70%',
    center: ['30%', '50%'],
    label: {
      normal: {
        show: false
      }
    },
    data: []
  }]
}
