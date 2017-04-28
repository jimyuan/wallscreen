import common from 'CHARTS/commonData'

export default {
  color: common.colorArr,
  legend: {
    show: false
  },
  series: [{
    hoverAnimation: false,
    type: 'pie',
    startAngle: 45,
    radius: '60%',
    silent: true,
    label: {
      normal: {
        show: true,
        textStyle: {
          fontWeight: 'bolder',
          fontSize: common.item16
        }
      }
    },
    data: []
  }]
}
