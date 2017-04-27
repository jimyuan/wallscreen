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
import dataFormat from 'FILTERS/dataFormat'
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

  computed: {
    pieDataFormat () {
      const pieData = this.pieData
      const sum = pieData.map(item => item.value).reduce((a, b) => a + b)
      return pieData.map(item => ({
        value: item.value,
        name: `${item.name} (${(item.value * 100 / sum).toFixed()}%, ${dataFormat(item.value)}吨)`
      }))
    }
  },

  mounted () {
    const cargoBoard = echarts.init(document.getElementById('cargoBoard'))
    cargoBoard.setOption(options)
    cargoBoard.setOption({
      legend: [{
        x: '50%',
        y: `${45 - this.pieData.length * 5}%`,
        itemGap: 8
      }],
      series: [{
        radius: '60%',
        center: ['20%', '50%']
      }]
    })

    // 数据加载
    cargoBoard.setOption({
      legend: {data: this.pieDataFormat.map(item => item.name)},
      series: {data: this.pieDataFormat}
    })
  }
}
</script>
