<template>
  <article class="count-zone">
    <div class="count-title" v-text="title"></div>
    <div class="count-line">
      <span v-for="c of todayCount" v-text="c" class="num-item"></span>
      <span class="unit" v-text="unit"></span>
    </div>
    <template v-if="subTitle">
      <div class="total-tips">{{subTitle}} <span v-text="totalCount"></span> {{unit}}</div>
    </template>
  </article>
</template>

<script>
import dataFormat from 'FILTERS/dataFormat'

export default {
  props: ['countOpt'],
  data () {
    return {
      title: this.countOpt.title,
      subTitle: this.countOpt.subTitle,
      unit: this.countOpt.unit
    }
  },

  computed: {
    todayCount () {
      return dataFormat(this.countOpt.todayCount).split('').map(item => item === ',' ? '' : item)
    },

    totalCount () {
      return dataFormat(this.countOpt.totalCount)
    }
  }
}
</script>
