import pieData from 'CHARTS/pieData'

const channelData = {...pieData()}
channelData.legend[0] = Object.assign(channelData.legend[0], {
  x: '50%',
  y: '17%'
})
channelData.series[0] = Object.assign(channelData.series[0], {
  name: '渠道',
  radius: '60%',
  center: ['20%', '50%']
})
export default channelData
