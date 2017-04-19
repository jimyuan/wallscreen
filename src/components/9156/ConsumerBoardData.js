export default {
  legend: [{
    orient: 'vertical',
    x: '10%',
    y: '3%',
    itemGap: 7,
    textStyle: {
      color: '#fff'
    },
    tooltip: {
      show: false
    },
    selectedMode: false,
    data: ['PC端', '移动端']
  }, {
    orient: 'vertical',
    x: '40%',
    y: '3%',
    itemGap: 7,
    textStyle: {
      color: '#fff'
    },
    tooltip: {
      show: false
    },
    selectedMode: false,
    data: ['新用户', '老用户']
  }],
  tooltip: {
    trigger: 'none'
  },
  series: [{
    name: '客户端',
    type: 'pie',
    z: 3,
    hoverAnimation: false,
    radius: ['40%', '60%'],
    center: ['20%', '65%'],
    label: {
      normal: false
    },
    data: [{
      value: 335,
      name: 'PC端',
      itemStyle: {
        normal: {
          color: '#8dbd1b'
        }
      }
    }, {
      value: 310,
      name: '移动端',
      itemStyle: {
        normal: {
          color: '#0096c1'
        }
      }
    }]
  }, {
    hoverAnimation: false,
    name: '客户端',
    type: 'pie',
    radius: [0, '41%'],
    center: ['20%', '65%'],
    label: {
      normal: {
        show: true,
        position: 'inside',
        formatter (obj) { return `${obj.percent.toFixed()}%` },
        textStyle: {
          fontSize: 10
        }
      }
    },
    itemStyle: {
      normal: {
        color: 'transparent',
        borderColor: '#fff'
      }
    },
    data: [{
      value: 335,
      name: 'PC端'
    }, {
      value: 310,
      name: '移动端'
    }]
  }, {
    name: '访问来源',
    hoverAnimation: false,
    type: 'pie',
    z: 3,
    radius: ['40%', '60%'],
    center: ['50%', '65%'],
    label: {
      normal: false
    },
    data: [{
      value: 1035,
      name: '新用户',
      itemStyle: {
        normal: {
          color: '#f8b226'
        }
      }
    }, {
      value: 1548,
      name: '老用户',
      itemStyle: {
        normal: {
          color: '#e74127'
        }
      }
    }]
  }, {
    name: '访问来源',
    hoverAnimation: false,
    type: 'pie',
    radius: [0, '41%'],
    center: ['50%', '65%'],
    label: {
      normal: {
        show: true,
        position: 'inside',
        formatter (obj) { return `${obj.percent.toFixed()}%` },
        textStyle: {
          fontSize: 10
        }
      }
    },
    itemStyle: {
      normal: {
        color: 'transparent',
        borderColor: '#fff'
      }
    },
    data: [{
      value: 1035,
      name: '新用户'
    }, {
      value: 1548,
      name: '老用户'
    }]
  }]
}
