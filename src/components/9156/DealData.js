import common from 'CHARTS/commonData'
import lineData from 'CHARTS/lineData'
export default {
  grid: [{
    show: true,
    containLabel: true,
    x: '5%',
    x2: '5%',
    y: '30%',
    y2: '5%',
    borderWidth: 0,
    backgroundColor: common.backgroundColor
  }],
  xAxis: lineData.xAxis,
  yAxis: lineData.yAxis,
  series: lineData.series
}
