import common from 'CHARTS/commonData'
import ringData from 'CHARTS/ringData'

// 2 个环形饼图 legend
const legend = [ringData.legend, ringData.legend]

// 2 个环形饼图 series
const series = ringData.series.concat(ringData.series)

export default {
  color: common.ringColor,
  legend,
  series
}
