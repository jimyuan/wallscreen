import common from 'CHARTS/commonData'
import ringData from 'CHARTS/ringData'
import lineData from 'CHARTS/lineData'

const grid = [{
  show: true,
  containLabel: true,
  x: '2%',
  x2: '8%',
  y: '20%',
  y2: '50%',
  borderWidth: 0,
  backgroundColor: {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 1,
    y2: 0
  }
}]

const xAxis = lineData().xAxis

const yAxis = lineData().yAxis

// 2 个环形饼图 legend
const legend = [ringData().legend, ringData().legend]
legend[0] = Object.assign(legend[0], {
  x: '15%',
  y: '55%',
  itemGap: common.item10
})
legend[1] = Object.assign(legend[1], {
  x: '65%',
  y: '55%',
  itemGap: common.item10
})

// 2 个环形饼图 series
const seriesRing = ringData().series.concat(ringData().series)
seriesRing[0] = Object.assign(seriesRing[0], {
  radius: ['20%', '30%'],
  center: ['25%', '83%']
})
seriesRing[1] = Object.assign(seriesRing[1], {
  radius: [0, '21%'],
  center: ['25%', '83%']
})
seriesRing[2] = Object.assign(seriesRing[2], {
  radius: ['20%', '30%'],
  center: ['75%', '83%']
})
seriesRing[3] = Object.assign(seriesRing[3], {
  radius: [0, '21%'],
  center: ['75%', '83%']
})

const seriesLine = lineData().series.concat(lineData().series)

export default {
  color: common.ringColor,
  grid,
  xAxis,
  yAxis,
  legend,
  series: seriesLine.concat(seriesRing)
}
