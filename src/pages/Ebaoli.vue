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
        <biz-progress-board v-if="progress" :data="progress"></biz-progress-board>
        <distribute-rate-board></distribute-rate-board>
      </div>
      <div class="dash-group mid-group">
        <finance-channel-board></finance-channel-board>
        <risk-management-board></risk-management-board>
      </div>
      <div class="dash-group right-group">
        <service-analysis-board></service-analysis-board>
      </div>
    </div>
    <time-stamp :value="timeStamp" class="stamp-pos"></time-stamp>
  </section>
</template>

<script>
import moment from 'moment'
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
      timeStamp: moment().subtract(10 * Math.random() | 0, 'minutes').format('YYYY-MM-DD HH:mm'),
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

    getOtherData () {
      cs.fetchSteel().then(data => {
        this.otherData = data
      })
    },

    getProgressData () {
      cs.scrollProgress().then(data => {
        this.progress = data
      })
    }
  },

  mounted () {
    // this.getTodayData()
    setInterval(() => {
      // this.getTodayData()
      this.getProgressData()
    }, 2000)
  },

  components: {TimeStamp, CountZone, BizProgressBoard, DistributeRateBoard, FinanceChannelBoard, RiskManagementBoard, ServiceAnalysisBoard}
}
</script>
