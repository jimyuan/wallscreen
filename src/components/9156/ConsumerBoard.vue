<template>
  <div class="dash">
    <h1>成交用户分析</h1>
    <div class="board">
      <div id="consumerBoard" class="charts"></div>
      <div class="table-consumer">
        <table>
          <thead>
            <tr>
              <th>地域</th>
              <th>运输量(吨)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item of area">
              <td v-text="item.orderfrom"></td>
              <td>{{ item.sum | dataFormat }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import options from './ConsumerData'
export default {
  props: ['data'],

  data () {
    return {
      userPieData: this.data.userTypeAnalysis.map(item => ({
        name: item.userTypeName,
        value: item.orderCount
      })),
      orderPieData: this.data.orderByAnalysis.map(item => ({
        name: item.orderByName,
        value: item.orderCount
      })),
      area: this.data.areaAnalysis
    }
  },
  mounted () {
    /* eslint-disable no-undef */
    const consumerBoard = echarts.init(document.getElementById('consumerBoard'))
    consumerBoard.setOption(options)
    consumerBoard.setOption({
      legend: [{
        x: '10%',
        y: '3%'
      }, {
        x: '40%',
        y: '3%'
      }],
      series: [{
        radius: ['40%', '60%'],
        center: ['20%', '65%']
      }, {
        radius: [0, '41%'],
        center: ['20%', '65%']
      }, {
        radius: ['40%', '60%'],
        center: ['50%', '65%']
      }, {
        radius: [0, '41%'],
        center: ['50%', '65%']
      }]
    })

    // 数据加载
    consumerBoard.setOption({
      legend: [
        {data: this.orderPieData.map(item => item.name)},
        {data: this.userPieData.map(item => item.name)}
      ],
      series: [
        {data: this.orderPieData},
        {data: this.orderPieData},
        {data: this.userPieData},
        {data: this.userPieData}
      ]
    })
  }
}
</script>
