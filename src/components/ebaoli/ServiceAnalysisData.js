import pieData from 'CHARTS/pieData'
import lineData from 'CHARTS/lineData'

const color = pieData.color

const grid = [{
  show: true,
  x: '10%',
  x2: '6%',
  y: '15%',
  y2: '65%',
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

const seriesLine = lineData.series

const legend = pieData.legend.concat(pieData.legend)

const seriesPie = pieData.series.concat(pieData.series)

export default {
  color,
  xAxis,
  yAxis,
  grid,
  legend,
  series: seriesLine.concat(seriesPie)
}
