<template>
  <section class="home">
    <ul class="unstyled">
      <li v-for="r of routerArr">
        <router-link :to="`\${r}`">
          <img :src="`../assets/logo-${r}.png`">
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data () {
    return {
      routerArr: ['91stell', '9156', 'ebaoli']
    }
  }
}
</script>
