<template>
  <section class="home">
    <router-link :to="'/'+route" v-for="(img, route) in routerData" :key="route">
      <img :src="img" class="logo">
    </router-link>
    <div class="launch-bar">
      <div class="button" :class="{play: play, pause: !play}" @click="full"></div>
    </div>
  </section>
</template>

<script>
import _9156 from 'ASSETS/logo-9156.png'
import _91steel from 'ASSETS/logo-91steel.png'
import _ebaoli from 'ASSETS/logo-ebaoli.png'
import fullScreen from 'bigscreen'
export default {
  data () {
    return {
      routerData: {
        '9156': _9156,
        '91steel': _91steel,
        'ebaoli': _ebaoli
      },
      play: true
    }
  },

  methods: {
    full () {
      fullScreen.enabled && fullScreen.toggle()
    }
  }
}
</script>
