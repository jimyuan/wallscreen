<template>
  <section class="site-9156">
    <img src="../assets/logo-9156.png" alt="9156" class="logo logo-zone" @click="doit">
    <count-zone :count-opt="count"></count-zone>
    <china-map></china-map>
    <div class="dash-group">
      <deal-board></deal-board>
      <consumer-board></consumer-board>
      <channel-board></channel-board>
      <cargo-board></cargo-board>
    </div>
    <live-board></live-board>
    <time-stamp :value="timeStamp" class="stamp-pos"></time-stamp>
  </section>
</template>

<script>
import moment from 'moment'
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
        todayCount: 12345,
        totalCount: 136982
      }
    }
  },

  methods: {
    doit () {
      this.count.todayCount += 20
    }
  },

  components: {
    TimeStamp, CountZone, DealBoard, ConsumerBoard, ChannelBoard, CargoBoard, LiveBoard, ChinaMap
  }
}
</script>
