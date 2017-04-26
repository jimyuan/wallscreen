<template>
  <div class="dash">
    <h1>货物类型分析</h1>
    <div class="board">
      <div id="cargoBoard" class="charts"></div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import options from './CargoData.js'
export default {
  props: ['data'],

  data () {
    return {
      pieData: this.data.map(item => ({
        name: item.goodsTypeName,
        value: item.sum
      }))
    }
  },

  mounted () {
    const cargoBoard = echarts.init(document.getElementById('cargoBoard'))
    cargoBoard.setOption(options)
    cargoBoard.setOption({
      legend: [{
        x: '50%',
        y: `${45 - this.pieData.length * 5}%`
      }],
      series: [{
        radius: '60%',
        center: ['20%', '50%']
      }]
    })

    // 数据加载
    cargoBoard.setOption({
      legend: {data: this.pieData.map(item => item.name)},
      series: {data: this.pieData}
    })
  }
}
</script>
