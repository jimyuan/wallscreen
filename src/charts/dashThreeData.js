export default {
  backgroundColor: 'rgba(1,42,71,0.8)',
  // legend: {
  //   orient: 'vertical',
  //   x2: '5%',
  //   y: '10%',
  //   textStyle: {
  //     color: '#fff'
  //   },
  //   tooltip: {
  //     show: false
  //   },
  //   selectedMode: false,
  //   data: ['物流电商', '钢铁电商', '钢厂', '水泥厂', '终端企业']
  // },
  series: [{
    name: '渠道销售排行',
    hoverAnimation: false,
    type: 'pie',
    radius: '70%',
    center: ['50%', '50%'],
    label: {
      normal: {
        textStyle: {
          color: '#fff'
        },
        formatter: '{b} {d}% {c}吨'
      }
    },
    labelLine: {
      normal: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.3)'
        },
        smooth: 0.2,
        length: 10,
        length2: 20
      }
    },
    data: [{
      value: 123234,
      name: '物流电商'
    }, {
      value: 73186,
      name: '钢铁电商'
    }, {
      value: 33392,
      name: '钢厂'
    }, {
      value: 18211,
      name: '水泥厂'
    }, {
      value: 9764,
      name: '终端企业'
    }]
  }]
}
