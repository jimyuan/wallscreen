import common from 'CHARTS/commonData'

const textStyle = common.textStyle

export default {
  color: common.colorArr,
  legend: [{
    orient: 'vertical',
    x: '60%',
    y: '14%',
    textStyle,
    tooltip: {
      show: false
    },
    itemGap: common.item16,
    selectedMode: false,
    data: ['申银量', '寄售量', '自营量', '工程配送', '撮合']
  }],
  series: [{
    name: '渠道销售排行',
    hoverAnimation: false,
    type: 'pie',
    radius: '70%',
    startAngle: 0,
    center: ['30%', '50%'],
    label: {
      normal: {
        show: false
      }
    }
  }]
}
