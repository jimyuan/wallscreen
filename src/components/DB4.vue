<template>
  <div class="dashboard">
    <h1>货物类型分析</h1>
    <article id="dash4"></article>
  </div>
</template>

<script>
import echarts from 'echarts'
import dashOpts from 'CHARTS/dashFourData'

export default {
  data () {
    return {
      fromData: {
        '钢铁': 186541,
        '水泥': 75204,
        '石材': 74939,
        '煤炭': 39335,
        '矿石': 65422,
        '其他': 7878
      }
    }
  },

  computed: {
    itemArr () {
      return {
        keys: Object.keys(this.fromData),
        vals: Object.values(this.fromData)
      }
    },

    itemSum () {
      return this.itemArr.vals.reduce((a, b) => a + b)
    },

    specName () {
      return this.itemArr.keys.map((v, i) => {
        return {
          name: `${v} - ${((this.itemArr.vals[i] / this.itemSum) * 100).toFixed(2)}% - ${this.itemArr.vals[i]}`
        }
      })
    },

    pieData () { // 饼图数据
      let vals = this.specName
      return vals.map((v, i) => {
        return {
          name: v.name,
          value: this.itemArr.vals[i]
        }
      })
    },

    pieLegend () { // 饼图 Legend
      let vals = this.specName
      return {
        data: vals.map(v => {
          return {
            name: v.name,
            icon: 'circle'
          }
        })
      }
    }
  },

  mounted () {
    // dashboard-4
    const dash = echarts.init(document.getElementById('dash4'))
    dashOpts.series[0].data = this.pieData
    dash.setOption({
      ...dashOpts,
      ...Object.assign(dashOpts.legend, this.pieLegend)
    })
  }
}
</script>
