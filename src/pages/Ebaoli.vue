<template>
  <section class="site-ebaoli">
    <header>
      <img src="../assets/logo-ebaoli.png" alt="ebaoli" class="logo logo-zone">
    </header>
    <div class="count-article">
      <count-zone :count-opt="amountOpt"></count-zone>
      <table class="table">
        <thead>
          <tr>
            <th v-for="th of tabHead" v-text="th"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td v-for="td of tabData">{{ td | dataFormat }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="layout">
      <div class="dash-group left-group">
        <!-- 业务办理进度 -->
        <biz-progress-board v-if="progress" :data="progress"></biz-progress-board>
        <!-- 大智运配送比 -->
        <distribute-rate-board v-if="otherData.shippingScaleAnalysis" :data="otherData"></distribute-rate-board>
      </div>
      <div class="dash-group mid-group">
        <!-- 筹资渠道 -->
        <finance-channel-board v-if="otherData.raiseChannelAnalysis" :data="otherData"></finance-channel-board>
        <!-- 风控 -->
        <risk-management-board v-if="otherData.riskmanageAnalysis" :data="otherData"></risk-management-board>
      </div>
      <div class="dash-group right-group">
        <!-- 服务用户分析 -->
        <service-analysis-board v-if="otherData.allUsersCount" :data="otherData"></service-analysis-board>
      </div>
    </div>
    <time-stamp class="stamp-pos"></time-stamp>
  </section>
</template>

<script>
import cs from 'SERVICES/ChartService'
import TimeStamp from 'COMPONENTS/common/TimeStamp'
import CountZone from 'COMPONENTS/common/CountZone'
import BizProgressBoard from 'COMPONENTS/ebaoli/BizProgressBoard'
import DistributeRateBoard from 'COMPONENTS/ebaoli/DistributeRateBoard'
import FinanceChannelBoard from 'COMPONENTS/ebaoli/FinanceChannelBoard'
import RiskManagementBoard from 'COMPONENTS/ebaoli/RiskManagementBoard'
import ServiceAnalysisBoard from 'COMPONENTS/ebaoli/ServiceAnalysisBoard'
export default {
  data () {
    return {
      amountOpt: {
        title: '累计金融服务金额',
        subTitle: '',
        unit: '万元',
        todayCount: 6982
      },
      tabHead: ['信用融资', '配送融资', '商票业务', '质押融资', '寄售', '托盘'],
      tabData: [],
      otherData: {},
      progress: {}
    }
  },

  methods: {
    // 今日数据获取
    getTodayData () {
      cs.liveEbaoli().then(data => {
        const record = data.financeRecords
        this.amountOpt.todayCount = data.allFinanceAmount
        this.tabData = [
          record.creditFinancing,
          record.dispatchingFinancing,
          record.ticketFinancing,
          record.pledgeFinancing,
          record.saleFinancing,
          record.trayFinancing
        ]
      })
    },
    // 固定数据获取
    getOtherData () {
      cs.fetchEbaoli().then(data => {
        this.otherData = data
      })
    },
    // 业务进度数据获取
    getProgressData () {
      cs.scrollProgress().then(data => {
        this.progress = data
      })
    }
  },

  mounted () {
    this.getTodayData()
    this.getProgressData()
    this.getOtherData()
  },

  components: {TimeStamp, CountZone, BizProgressBoard, DistributeRateBoard, FinanceChannelBoard, RiskManagementBoard, ServiceAnalysisBoard}
}
</script>
