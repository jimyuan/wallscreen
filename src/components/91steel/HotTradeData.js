import common from 'CHARTS/commonData'
export default {
  color: common.colorArr,
  legend: [{
    orient: 'vertical',
    x: '60%',
    y: '30%',
    textStyle: {
      color: '#fff',
      fontSize: common.view(16)
    },
    tooltip: {
      show: false
    },
    itemGap: common.view(16),
    selectedMode: false,
    data: ['建材', '热卷', '厚板']
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
    }
  }]
}
