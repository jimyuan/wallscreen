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
    backgroundColor: {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 1,
      y2: 0,
      colorStops: [{
        offset: 1 / 6, color: common.oddColor
      }, {
        offset: 1 / 6, color: common.evenColor
      }, {
        offset: 2 / 6, color: common.evenColor
      }, {
        offset: 2 / 6, color: common.oddColor
      }, {
        offset: 3 / 6, color: common.oddColor
      }, {
        offset: 3 / 6, color: common.evenColor
      }, {
        offset: 4 / 6, color: common.evenColor
      }, {
        offset: 4 / 6, color: common.oddColor
      }, {
        offset: 5 / 6, color: common.oddColor
      }, {
        offset: 5 / 6, color: common.evenColor
      }]
    }
  }],
  xAxis: lineData().xAxis,
  yAxis: lineData().yAxis,
  series: lineData().series
}
