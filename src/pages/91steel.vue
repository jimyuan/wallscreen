<template>
  <section class="site-91steel">
    <div class="dash-group-left">
      <reg-count-board></reg-count-board>
      <hang-out-board></hang-out-board>
    </div>
    <div class="main-zone">
      <header>
        <img src="../assets/logo-91steel.png" class="logo logo-zone">
      </header>
      <div class="count-article">
        <count-zone :count-opt="tradeOpt"></count-zone>
        <count-zone :count-opt="amountOpt"></count-zone>
      </div>
      <china-map></china-map>
      <time-stamp :value="timeStamp" class="stamp-pos"></time-stamp>
    </div>
    <div class="dash-group-right">
      <increase-board></increase-board>
      <trade-count-board></trade-count-board>
      <regional-deal-board></regional-deal-board>
      <hot-trade-board></hot-trade-board>
    </div>
  </section>
</template>

<script>
import moment from 'moment'
import TimeStamp from 'COMPONENTS/common/TimeStamp'
import CountZone from 'COMPONENTS/common/CountZone'
import RegCountBoard from 'COMPONENTS/91steel/RegCountBoard'
import HangOutBoard from 'COMPONENTS/91steel/HangOutBoard'
import IncreaseBoard from 'COMPONENTS/91steel/IncreaseBoard'
import TradeCountBoard from 'COMPONENTS/91steel/TradeCountBoard'
import RegionalDealBoard from 'COMPONENTS/91steel/RegionalDealBoard'
import HotTradeBoard from 'COMPONENTS/91steel/HotTradeBoard'
import ChinaMap from 'COMPONENTS/91steel/ChinaMap'
export default {
  data () {
    return {
      timeStamp: moment().subtract(10 * Math.random() | 0, 'minutes').format('YYYY-MM-DD HH:mm'),
      tradeOpt: {
        title: '今日交易量',
        subTitle: '累计交易量：',
        unit: '吨',
        todayCount: 12345,
        totalCount: 136982
      },
      amountOpt: {
        title: '今日交易金额',
        subTitle: '累计交易金额：',
        unit: '元',
        todayCount: 12345,
        totalCount: 136982

      }
    }
  },
  components: { TimeStamp, CountZone, RegCountBoard, HangOutBoard, IncreaseBoard, TradeCountBoard, RegionalDealBoard, HotTradeBoard, ChinaMap }
}
</script>
