<template>
  <section>
    <div class="logo"><img src="../assets/logo.png" alt="logo"></div>
    <div class="traffic-info">
      <h1 class="page-title">今日运输量</h1>
      <div class="traffic-count">
        <template v-for="(num, index) in trafficArr">
          <span class="numItem" v-text="num"></span>
          <span class="split" v-if="index+1==tLen%3 || index+1==tLen%3+3 && index+1<tLen">,</span>
        </template>
        <span class="split">吨</span>
      </div>
      <h2>累计运输量：{{ total | dataFormat }} 吨</h2>
    </div>
    <china-map></china-map>
    <div class="dash-group">
      <dash-board-1></dash-board-1>
      <dash-board-2></dash-board-2>
      <dash-board-3></dash-board-3>
      <dash-board-4></dash-board-4>
    </div>
    <dash-board-5></dash-board-5>
  </section>
</template>

<script>
import ChinaMap from 'COMPONENTS/ChinaMap'
import DashBoard1 from 'COMPONENTS/DB1'
import DashBoard2 from 'COMPONENTS/DB2'
import DashBoard3 from 'COMPONENTS/DB3'
import DashBoard4 from 'COMPONENTS/DB4'
import DashBoard5 from 'COMPONENTS/DB5'

export default {
  data () {
    return {
      traffic: 55096,
      total: 234009
    }
  },
  computed: {
    trafficArr () {
      return this.traffic.toString().split('')
    },
    tLen () {
      return this.trafficArr.length
    }
  },
  mounted () {
    setInterval(() => {
      let add = Math.random() * 100 | 0
      this.traffic += add
      this.total += add
    }, 1000)
  },
  components: {
    ChinaMap, DashBoard1, DashBoard2, DashBoard3, DashBoard4, DashBoard5
  }
}
</script>
