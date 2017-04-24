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
  props: ['data'],

  data () {
    return {
      // 本月注册用户
      monthlyUser: this.data.companysRecords.slice(-1)[0].registerUsersCount,
      // 本月注册企业
      monthlyCompany: this.data.companysRecords.slice(-1)[0].registerCompanyCount,
      // 累计注册用户
      totalUser: this.data.allUsersCount,
      // 累计注册企业
      totalCompany: this.data.allCompanyCount,
      // 折线图 category
      xData: this.data.companysRecords.map(item => item.month),
      // 折线图注册用户 data
      yData1: this.data.companysRecords.map(item => item.registerUsersCount),
      // 折线图注册企业 data
      yData2: this.data.companysRecords.map(item => item.registerCompanyCount),
      // 客户端饼图1 data
      pieData1: this.data.sourceTypeTotal.map(item => ({
        name: item.registerSourceTypeName,
        value: item.registerUsersCount
      })),
      // 客户端饼图2 data
      pieData2: this.data.companyTypeTotal.map(item => ({
        name: item.registerCompanyTypeName,
        value: item.registerCompanyCount
      }))
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
        {data: this.yData1},
        {
          data: this.yData2,
          lineStyle: {
            normal: {
              color: '#f8b226'
            }
          },
          itemStyle: {
            normal: {
              color: '#f8b226'
            }
          }
        },
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
