import pieData from 'CHARTS/pieData'

const tradeCountData = {...pieData()}
tradeCountData.legend[0] = Object.assign(tradeCountData.legend[0], {
  x: '60%',
  y: '14%'
})
tradeCountData.series[0] = Object.assign(tradeCountData.series[0], {
  name: '交易量',
  radius: '70%',
  center: ['30%', '50%']
})
export default tradeCountData
