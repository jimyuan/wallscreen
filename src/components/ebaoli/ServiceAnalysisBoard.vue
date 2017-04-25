<template>
  <div class="dash">
    <h1>服务用户分析</h1>
    <div class="board">
      <h2 class="trans-count">服务用户总数：291 家</h2>
      <h3 class="analysis-mod line1"><span>新增服务用户数</span></h3>
      <h3 class="analysis-mod line2"><span>用户授信额度</span></h3>
      <h3 class="analysis-mod line3"><span>用户合作年限</span></h3>
      <div id="serviceAnalysis" class="charts"></div>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import options from './serviceAnalysisData'
import common from 'CHARTS/commonData'
export default {
  data () {
    return {
      xData: ['11月', '12月', '1月', '2月', '3月', '本月'],
      yData: [123, 450, 1100, 723, 910, 812],
      quotePieData: [
        {name: 'aaa', value: 123},
        {name: 'bbb', value: 123},
        {name: 'ccc', value: 123}
      ],
      expirePieData: [
        {name: 'vvvv', value: 123},
        {name: 'eeee', value: 123},
        {name: 'oooo', value: 123},
        {name: 'nnnn', value: 123}
      ]
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
        {data: this.quotePieData.map(item => item.name)},
        {data: this.expirePieData.map(item => item.name)}
      ],
      xAxis: [
        {data: this.xData}
      ],
      series: [
        {data: this.yData},
        {data: this.quotePieData},
        {data: this.expirePieData}
      ]
    })
  }
}
</script>
