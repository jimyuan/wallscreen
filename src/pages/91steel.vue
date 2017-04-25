<template>
  <section class="site-91steel">
    <div class="dash-group-left">
      <!-- 注册用户/企业分析 -->
      <reg-count-board
        v-if="otherData.registerUsersCompanys"
        :data="otherData.registerUsersCompanys">
      </reg-count-board>
      <!-- 挂牌量分析 -->
      <hang-out-board
        v-if="otherData.quotedAnalysis"
        :data="otherData.quotedAnalysis">
      </hang-out-board>
    </div>
    <div class="main-zone">
      <header>
        <img src="../assets/logo-91steel.png" class="logo logo-zone">
      </header>
      <div class="count-article">
        <!-- 交易量 & 金额统计 -->
        <count-zone :count-opt="tradeOpt"></count-zone>
        <count-zone :count-opt="amountOpt"></count-zone>
      </div>
      <!-- 地图 charts -->
      <china-map :data="liveTrade"></china-map>
      <time-stamp :value="timeStamp" class="stamp-pos"></time-stamp>
    </div>
    <div class="dash-group-right" v-if="otherData.tradeAnalysis">
      <!-- 近半年交易增长趋势 -->
      <increase-board
        :data="otherData.quotedAnalysis">
      </increase-board>
      <!-- 交易量统计 -->
      <trade-count-board
        :data="otherData.tradeAnalysis.businessTypeRecords">
      </trade-count-board>
      <!-- 区域成交分析 -->
      <regional-deal-board
        :data="otherData.tradeAnalysis.regionRecords">
      </regional-deal-board>
      <!-- 热门交易种类 -->
      <hot-trade-board
        :data="otherData.tradeAnalysis.tradeTypeRecords">
      </hot-trade-board>
    </div>
  </section>
</template>

<script>
import moment from 'moment'
import cs from 'SERVICES/ChartService'
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
        todayCount: 0,
        totalCount: 0
      },
      amountOpt: {
        title: '今日交易金额',
        subTitle: '累计交易金额：',
        unit: '元',
        todayCount: 0,
        totalCount: 0
      },
      otherData: {},
      liveTrade: []
    }
  },

  methods: {
    getTodayData () {
      cs.liveSteel().then(data => {
        Object.assign(this.tradeOpt, {
          todayCount: data.todayTradeAmount,
          totalCount: data.allTradeAmount
        })
        Object.assign(this.amountOpt, {
          todayCount: data.todayTradeMoney,
          totalCount: data.allTradeMoney
        })
        this.liveTrade = data.tradeRecords
      })
    },

    getOtherData () {
      cs.fetchEbaoli().then(data => {
        this.otherData = data
      })
    }
  },

  mounted () {
    this.getTodayData()
    this.getOtherData()
    setInterval(this.getTodayData, 10000)
  },

  components: { TimeStamp, CountZone, RegCountBoard, HangOutBoard, IncreaseBoard, TradeCountBoard, RegionalDealBoard, HotTradeBoard, ChinaMap }
}
</script>
