<template>
  <div class="time-stamp">数据更新于 <time v-text="value"></time></div>
</template>

<script>
export default {
  props: ['value']
}
</script>
