<template>
  <section class="site-9156">
    <img src="../assets/logo-9156.png" alt="9156" class="logo logo-zone">
    <div class="dash-group">
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
    <div class="dash dash-bargain">
      <h1>Lorem ipsum dolor sit.</h1>
      <div class="board"></div>
    </div>
    <div class="time-stamp">数据更新于 <time v-text="timeStamp"></time></div>
  </section>
</template>

<script>
import moment from 'moment'
export default {
  data () {
    return {
      timeStamp: moment().subtract(10 * Math.random() | 0, 'minutes').format('YYYY-MM-DD HH:mm')
    }
  }
}
</script>
