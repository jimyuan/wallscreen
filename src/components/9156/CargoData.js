import pieData from 'CHARTS/pieData'

const cargoData = {...pieData()}
cargoData.legend[0] = Object.assign(cargoData.legend[0], {
  x: '50%',
  y: '30%'
})
cargoData.series[0] = Object.assign(cargoData.series[0], {
  radius: '60%',
  center: ['20%', '50%']
})
export default cargoData
