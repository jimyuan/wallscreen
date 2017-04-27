<template>
  <div class="time-stamp">数据更新于 <time v-text="timeStamp"></time></div>
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
