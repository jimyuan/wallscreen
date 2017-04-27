<template>
  <div class="dash">
    <h1>服务用户分析</h1>
    <div class="board">
      <h2 class="trans-count">服务用户总数：{{ allUserCount | dataFormat }} 家</h2>
      <h3 class="analysis-mod line1"><span>新增服务用户数</span></h3>
      <h3 class="analysis-mod line2"><span>用户授信额度</span></h3>
      <h3 class="analysis-mod line3"><span>用户合作年限</span></h3>
      <div id="serviceAnalysis" class="charts"></div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import dataFormat from 'FILTERS/dataFormat'
import options from './serviceAnalysisData'
import common from 'CHARTS/commonData'
export default {
  props: ['data'],

  data () {
    return {
      allUserCount: this.data.allUsersCount,
      xData: this.data.registeUserAnalysis.map(item => `${item.month}月`).reverse(),
      yData: this.data.registeUserAnalysis.map(item => item.userCount).reverse(),
      quotePieData: this.data.userCreditAnalysis.map(item => ({
        name: item.userCreditAmoutName,
        value: item.userCount
      })),
      expirePieData: this.data.userYearsAnalysis.map(item => ({
        name: item.userYearsName,
        value: item.userCount
      }))
    }
  },

  methods: {
    pieDataFormat (pieData) {
      const sum = pieData.map(item => item.value).reduce((a, b) => a + b)
      return pieData.map(item => ({
        value: item.value,
        name: `${item.name} (${(item.value * 100 / sum).toFixed()}%, ${dataFormat(item.value)}家)`
      }))
    }
  },

  mounted () {
    const serviceAnalysis = echarts.init(document.getElementById('serviceAnalysis'))
    serviceAnalysis.setOption(options)
    serviceAnalysis.setOption({
      yAxis: [{
        name: '单位: 万元'
      }],
      grid: [{
        // 设置坐标区斑马纹效果
        backgroundColor: {
          colorStops: common.gradient(this.xData.length, common.oddColor, common.evenColor)
        }
      }],
      legend: [{
        x: '50%',
        y: '53%'
      }, {
        x: '50%',
        y: '82%'
      }],
      series: [{}, {
        radius: '26%',
        center: ['20%', '58%']
      }, {
        radius: '26%',
        center: ['20%', '88%']
      }]
    })

    // 数据加载
    serviceAnalysis.setOption({
      legend: [
        {data: this.pieDataFormat(this.quotePieData).map(item => item.name)},
        {data: this.pieDataFormat(this.expirePieData).map(item => item.name)}
      ],
      xAxis: [
        {data: this.xData}
      ],
      series: [
        {data: this.yData},
        {data: this.pieDataFormat(this.quotePieData)},
        {data: this.pieDataFormat(this.expirePieData)}
      ]
    })
  }
}
</script>
