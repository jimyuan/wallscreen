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

const xAxis = lineData.xAxis

const yAxis = lineData.yAxis

// 2 个环形饼图 legend
const legend = [ringData.legend, ringData.legend]

// 2 个环形饼图 series
const seriesRing = ringData.series.concat(ringData.series)

// 折线图
const seriesLine = lineData.series.concat(lineData.series)

export default {
  color: common.ringColor,
  grid,
  xAxis,
  yAxis,
  legend,
  series: seriesLine.concat(seriesRing)
}
