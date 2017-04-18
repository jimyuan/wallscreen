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
        <div class="dash">
          <h1>Lorem ipsum dolor sit.</h1>
          <div class="board"></div>
        </div>
        <div class="dash">
          <h1>Lorem ipsum dolor sit.</h1>
          <div class="board"></div>
        </div>
      </div>
      <div class="dash-group mid-group">
        <div class="dash">
          <h1>Lorem ipsum dolor sit.</h1>
          <div class="board"></div>
        </div>
        <div class="dash">
          <h1>Lorem ipsum dolor sit.</h1>
          <div class="board"></div>
        </div>
      </div>
      <div class="dash-group right-group">
        <div class="dash">
          <h1>Lorem ipsum dolor sit.</h1>
          <div class="board"></div>
        </div>
      </div>
    </div>
    <time-stamp :value="timeStamp" class="stamp-pos"></time-stamp>
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
      amountOpt: {
        title: '累计金融服务金额',
        subTitle: '',
        unit: '万元',
        todayCount: 6982
      },
      tabHead: ['信用融资', '配送融资', '商票业务', '质押融资', '寄售', '托盘'],
      tabData: [3234, 220, 33, 99012, 1125532, 0]
    }
  },
  components: {TimeStamp, CountZone}
}
</script>
