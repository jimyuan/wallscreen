import pieData from 'CHARTS/pieData'

const hotTradeData = {...pieData()}
hotTradeData.legend[0] = Object.assign(hotTradeData.legend[0], {
  x: '60%',
  y: '30%'
})
hotTradeData.series[0] = Object.assign(hotTradeData.series[0], {
  name: '热门交易',
  radius: '70%',
  center: ['30%', '50%']
})
export default hotTradeData
