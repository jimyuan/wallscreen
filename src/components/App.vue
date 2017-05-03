<template>
  <div id="app">
    <transition :name="transName">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      // transName: 'slide-left'
      transName: 'fade',
      index: 1
    }
  },

  computed: mapState({
    playMode: state => state.playMode
  }),

  watch: {
    '$route' (to, from) {
      if (this.transName !== 'fade') {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    },

    playMode () {
      this.routeRoll()
    }
  },

  methods: {
    routeRoll () {
      const route = ['9156', 'ebaoli', '91steel']
      this.$router.push({ name: route[0] })
      setInterval(() => {
        if (route[this.index]) {
          console.log(this.index)
          this.$router.push({ name: route[this.index] })
          this.index++
        } else {
          this.$router.push({ name: route[0] })
          this.index = 1
        }
      }, 5 * 60 * 1000)
    }
  }
}
</script>

<style lang="scss">
@import "../scss/docs";
</style>
