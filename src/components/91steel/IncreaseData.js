import lineData from 'CHARTS/lineData'
const grid = [{
  show: true,
  containLabel: true,
  x: '5%',
  x2: '8%',
  y: '25%',
  y2: '8%',
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

const series = lineData.series

export default {
  grid,
  xAxis,
  yAxis,
  series
}
