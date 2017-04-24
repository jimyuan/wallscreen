<template>
  <div class="dash">
    <h1>成交用户分析</h1>
    <div class="board">
      <div id="consumerBoard" class="charts"></div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import options from './ConsumerData'
export default {
  data () {
    return {
      pieData1: [
        {name: 'aaaa', value: 10},
        {name: 'bbbb', value: 30}
      ],
      pieData2: [
        {name: 'ccdc', value: 10},
        {name: 'dddd', value: 20}
      ]
    }
  },
  mounted () {
    const consumerBoard = echarts.init(document.getElementById('consumerBoard'))
    consumerBoard.setOption(options)

    // 数据加载
    consumerBoard.setOption({
      legend: [
        {data: this.pieData1.map(item => item.name)},
        {data: this.pieData2.map(item => item.name)}
      ],
      series: [
        {data: this.pieData1},
        {data: this.pieData1},
        {data: this.pieData2},
        {data: this.pieData2}
      ]
    })
  }
}
</script>
