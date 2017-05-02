<template>
  <div class="time-stamp">数据更新于 <time>{{ timeStamp | timeFormat }}</time></div>
</template>

<script>
export default {
  data () {
    return {
      timeStamp: Date.now() - 1000 * 60 * (Math.random() * 10 | 0)
    }
  }
}
</script>
