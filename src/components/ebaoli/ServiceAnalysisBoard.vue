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
import options from './serviceAnalysisData'
import common from 'CHARTS/commonData'
import dataFormat from 'FILTERS/dataFormat'
export default {
  props: ['data'],

  data () {
    return {
      allUserCount: this.data.allUsersCount,
      xData: this.data.registeUserAnalysis.map(item => item.month).reverse(),
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

  mounted () {
    /* eslint-disable no-undef */
    const serviceAnalysis = echarts.init(document.getElementById('serviceAnalysis'))
    serviceAnalysis.setOption(options)
    serviceAnalysis.setOption({
      yAxis: [{
        name: '单位: 家'
      }],
      xAxis: [{
        axisLabel: common.monthLabel
      }],
      grid: [{
        // 设置坐标区斑马纹效果
        backgroundColor: {
          colorStops: common.gradient(this.xData.length, common.oddColor, common.evenColor)
        }
      }],
      series: [{}, {
        radius: '26%',
        center: ['50%', '58%'],
        label: {
          normal: {
            formatter ({name, value, percent}) {
              return `${name}\n{${percent}%, ${dataFormat(value)}家}`
            }
          }
        }
      }, {
        radius: '26%',
        center: ['50%', '88%'],
        label: {
          normal: {
            formatter ({name, value, percent}) {
              return `${name}\n{${percent}%, ${dataFormat(value)}家}`
            }
          }
        }
      }]
    })

    // 数据加载
    serviceAnalysis.setOption({
      xAxis: {data: this.xData},
      series: [
        {data: this.yData},
        {data: this.quotePieData},
        {data: this.expirePieData}
      ]
    })
  }
}
</script>
