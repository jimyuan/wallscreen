<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // transitionName: 'slide-left'
      transitionName: 'fade'
    }
  },
  watch: {
    '$route' (to, from) {
      if (this.transitionName !== 'fade') {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    }
  }
}
</script>

<style lang="scss">
@import "../scss/docs";
</style>
