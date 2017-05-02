import common from 'CHARTS/commonData'
import dataFormat from 'FILTERS/dataFormat'

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
        formatter ({name, value, percent}) {
          return `${name}\n{${percent}%, ${dataFormat(value)}吨}`
        },
        textStyle: {
          fontWeight: 'bolder',
          fontSize: common.item16
        }
      }
    },
    data: []
  }]
}
