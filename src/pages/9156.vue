<template>
  <section class="site-9156">
    <img src="../assets/logo-9156.png" alt="9156" class="logo logo-zone">
    <count-zone :count-opt="count"></count-zone>
    <china-map></china-map>
    <div class="dash-group">
      <!-- 全网成交情况 -->
      <deal-board v-if="allData.sumByMonth" :data="allData.sumByMonth"></deal-board>
      <!-- 成交用户分析 -->
      <consumer-board v-if="allData.userTypeAnalysis" :data="{userTypeAnalysis: allData.userTypeAnalysis, areaAnalysis: allData.areaAnalysis, orderByAnalysis: allData.orderByAnalysis}"></consumer-board>
      <!-- 渠道销售排行 -->
      <channel-board v-if="allData.channelAnalysis" :data="allData.channelAnalysis"></channel-board>
      <!-- 货物类型分析 -->
      <cargo-board v-if="allData.goodsTypeAnalysis" :data="allData.goodsTypeAnalysis"></cargo-board>
    </div>
    <!-- 即时最新成交 -->
    <live-board v-if="deal" :data="deal"></live-board>
    <time-stamp :value="timeStamp" class="stamp-pos"></time-stamp>
  </section>
</template>

<script>
import moment from 'moment'
import cs from 'SERVICES/ChartService'
import TimeStamp from 'COMPONENTS/common/TimeStamp'
import CountZone from 'COMPONENTS/common/CountZone'
import DealBoard from 'COMPONENTS/9156/DealBoard'
import ConsumerBoard from 'COMPONENTS/9156/ConsumerBoard'
import ChannelBoard from 'COMPONENTS/9156/ChannelBoard'
import CargoBoard from 'COMPONENTS/9156/CargoBoard'
import LiveBoard from 'COMPONENTS/9156/LiveBoard'
import ChinaMap from 'COMPONENTS/9156/ChinaMap'
export default {
  data () {
    return {
      timeStamp: moment().subtract(10 * Math.random() | 0, 'minutes').format('YYYY-MM-DD HH:mm'),
      count: {
        title: '今日运输量',
        subTitle: '累计运输量：',
        unit: '吨',
        todayCount: 0,
        totalCount: 0
      },
      allData: {},
      deal: []
    }
  },

  methods: {
    getData () {
      cs.fetch9156().then(data => {
        this.allData = data
        this.deal = data.latestOrder.map(item => {
          item.orderCode = Math.random()
          return item
        })
        Object.assign(this.count, {
          todayCount: data.sumByToday,
          totalCount: data.sumByall
        })
      })
    }
  },

  mounted () {
    this.getData()
    setInterval(() => {
      this.getData()
    }, 20000)
  },

  components: {
    TimeStamp, CountZone, DealBoard, ConsumerBoard, ChannelBoard, CargoBoard, LiveBoard, ChinaMap
  }
}
</script>
