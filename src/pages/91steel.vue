<template>
  <section class="site-91steel">
    <div class="dash-group-left">
      <div class="dash">
        <h1>Lorem ipsum dolor sit.</h1>
        <div class="board"></div>
      </div>
      <div class="dash">
        <h1>Lorem ipsum dolor sit.</h1>
        <div class="board"></div>
      </div>
    </div>
    <div class="main-zone">
      <header>
        <img src="../assets/logo-91steel.png" alt="91steel" class="logo logo-zone">
      </header>
      <div class="count-article">
        <count-zone :count-opt="tradeOpt"></count-zone>
        <count-zone :count-opt="amountOpt"></count-zone>
      </div>
      <div class="map-zone"></div>
      <time-stamp :value="timeStamp" class="stamp-pos"></time-stamp>
    </div>
    <div class="dash-group-right">
      <div class="dash">
        <h1>Lorem ipsum dolor sit.</h1>
        <div class="board"></div>
      </div>
      <div class="dash">
        <h1>Lorem ipsum dolor sit.</h1>
        <div class="board"></div>
      </div>
      <div class="dash">
        <h1>Lorem ipsum dolor sit.</h1>
        <div class="board"></div>
      </div>
      <div class="dash">
        <h1>Lorem ipsum dolor sit.</h1>
        <div class="board"></div>
      </div>
    </div>
  </section>
</template>

<script>
import moment from 'moment'
import TimeStamp from 'COMPONENTS/common/TimeStamp'
import CountZone from 'COMPONENTS/common/CountZone'
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
  components: {TimeStamp, CountZone}
}
</script>
