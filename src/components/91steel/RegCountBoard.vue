<template>
  <div class="dash">
    <h1>注册用户/企业分析</h1>
    <div class="board">
      <h2 class="trans-count">
        <span>本月注册用户：{{ monthlyUser | dataFormat }}</span>
        <span>累计注册用户：{{ totalUser | dataFormat }}</span>
      </h2>
      <h2 class="trans-count">
        <span>本月注册企业：{{ monthlyCompany | dataFormat }}</span>
        <span>累计注册企业：{{ totalCompany | dataFormat }}</span>
      </h2>
      <div id="regCount" class="charts"></div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import options from './RegCountData'
import common from 'CHARTS/commonData'
export default {
  data () {
    return {
      // 本月注册用户
      monthlyUser: 1811,
      // 本月注册企业
      monthlyCompany: 311,
      // 累计注册用户
      totalUser: 32290,
      // 累计注册企业
      totalCompany: 6322,
      // 折线图 category
      xData: ['11月', '12月', '1月', '2月', '3月', '本月'],
      // 折线图 data
      yData: [300, 450, 660, 520, 700, 830],
      // 客户端饼图1 data
      pieData1: [
        {name: 'PC 端', value: 335},
        {name: '移动端', value: 810}
      ],
      // 客户端饼图2 data
      pieData2: [
        {name: '钢厂数', value: 1225},
        {name: '终端数', value: 861}
      ]
    }
  },

  mounted () {
    const regCount = echarts.init(document.getElementById('regCount'))
    // 设置坐标区斑马纹效果
    options.grid[0].backgroundColor.colorStops = common.gradient(this.xData.length, common.oddColor, common.evenColor)
    regCount.setOption(options)

    // 加载数据
    regCount.setOption({
      xAxis: {data: this.xData},
      series: [
        {data: this.yData},
        {data: this.pieData1},
        {data: this.pieData1},
        {data: this.pieData2},
        {data: this.pieData2}
      ],
      legend: [
        {data: this.pieData1.map(item => item.name)},
        {data: this.pieData2.map(item => item.name)}
      ]
    })
  }
}
</script>
