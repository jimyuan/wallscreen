<template>
  <section class="site-9156">
    <img src="../assets/logo-9156.png" alt="9156" class="logo logo-zone">
    <count-zone :count-opt="count"></count-zone>
    <china-map v-if="liveOrder"></china-map>
    <div class="dash-group">
      <!-- 全网成交情况 -->
      <deal-board v-if="otherData.sumByMonth" :data="otherData.sumByMonth"></deal-board>
      <!-- 成交用户分析 -->
      <consumer-board v-if="otherData.userTypeAnalysis" :data="{userTypeAnalysis: otherData.userTypeAnalysis, areaAnalysis: otherData.areaAnalysis, orderByAnalysis: otherData.orderByAnalysis}"></consumer-board>
      <!-- 渠道销售排行 -->
      <channel-board v-if="otherData.channelAnalysis" :data="otherData.channelAnalysis"></channel-board>
      <!-- 货物类型分析 -->
      <cargo-board v-if="otherData.goodsTypeAnalysis" :data="otherData.goodsTypeAnalysis"></cargo-board>
    </div>
    <!-- 即时最新成交 -->
    <live-board v-if="liveOrder" :data="liveOrder"></live-board>
    <time-stamp class="stamp-pos"></time-stamp>
  </section>
</template>

<script>
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
      count: {
        title: '今日运输量',
        subTitle: '累计运输量：',
        unit: '吨',
        todayCount: 0,
        totalCount: 0
      },
      otherData: {},
      liveOrder: []
    }
  },

  methods: {
    getOtherData () {
      cs.fetch9156().then(data => {
        this.otherData = data
      })
    },

    getLiveData () {
      cs.getOrder().then(data => {
        Object.assign(this.count, {
          todayCount: data.sumByToday,
          totalCount: data.sumByall
        })
        this.liveOrder = data.latestOrder
      })
    }
  },

  mounted () {
    this.getOtherData()
    this.getLiveData()
  },

  components: {
    TimeStamp, CountZone, DealBoard, ConsumerBoard, ChannelBoard, CargoBoard, LiveBoard, ChinaMap
  }
}
</script>
