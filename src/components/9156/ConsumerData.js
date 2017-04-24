import common from 'CHARTS/commonData'
import ringData from 'CHARTS/ringData'

// 2 个环形饼图 legend
const legend = [ringData().legend, ringData().legend]
legend[0] = Object.assign(legend[0], {
  x: '10%',
  y: '3%'
})
legend[1] = Object.assign(legend[1], {
  x: '40%',
  y: '3%'
})

// 2 个环形饼图 series
const argus = [{
  radius: ['40%', '60%'],
  center: ['20%', '65%']
}, {
  radius: [0, '41%'],
  center: ['20%', '65%']
}, {
  radius: ['40%', '60%'],
  center: ['50%', '65%']
}, {
  radius: [0, '41%'],
  center: ['50%', '65%']
}]
const series = ringData().series.concat(ringData().series).map((item, index) => {
  return {
    ...item,
    ...argus[index]
  }
})

export default {
  color: common.ringColor,
  legend,
  series
}
