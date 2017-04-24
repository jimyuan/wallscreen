import common from 'CHARTS/commonData'

const textStyle = common.textStyle

export default function () {
  return {
    legend: {
      orient: 'vertical',
      textStyle,
      tooltip: {
        show: false
      },
      selectedMode: false,
      data: []
    },
    series: [{
      type: 'pie',
      z: 3,
      hoverAnimation: false,
      label: {
        normal: false
      },
      data: []
    }, {
      hoverAnimation: false,
      type: 'pie',
      label: {
        normal: {
          show: true,
          position: 'inside',
          formatter (obj) { return `${obj.percent.toFixed()}%` },
          textStyle: {
            fontSize: common.font13
          }
        }
      },
      itemStyle: {
        normal: {
          color: 'transparent',
          borderColor: '#fff'
        }
      },
      data: []
    }]
  }
}
