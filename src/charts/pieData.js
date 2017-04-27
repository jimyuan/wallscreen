import common from 'CHARTS/commonData'

export default {
  color: common.colorArr,
  legend: {
    show: false
  },
  series: [{
    hoverAnimation: false,
    type: 'pie',
    startAngle: 0,
    radius: '60%',
    silent: true,
    label: {
      normal: {
        show: true,
        textStyle: {
          fontWeight: 'bold',
          fontSize: common.item16
        }
      }
    },
    data: []
  }]
}
