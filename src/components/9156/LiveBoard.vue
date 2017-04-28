<template>
  <div class="dash dash-bargain">
    <h1>即时最新成交</h1>
    <div class="board">
      <table class="deal-table">
        <thead>
          <tr>
            <th v-for="h of tHead" v-text="h"></th>
          </tr>
        </thead>
        <transition-group tag="tbody" name="list-row" mode="out-in">
          <tr v-for="deal of dealRecords" :key="deal" class="list-item">
             <td v-text="deal.orderTime"></td>
             <td v-text="deal.route"></td>
             <td v-text="deal.weight"></td>
             <td v-text="deal.status"></td>
           </tr>
        </transition-group>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: ['data'],

  data () {
    return {
      tHead: ['时间', '路线', '重量(吨)', '状态'],
      dealRecords: [],
      index: 0
    }
  },

  computed: {
    ...mapState({
      rollTime: state => state.rollTime
    }),

    newData () {
      return this.data
    },

    deal () {
      return this.newData[this.index]
    }
  },

  watch: {
    newData () {
      this.index = 0
      this.getDeal()
    }
  },

  methods: {
    getDeal () {
      if (this.deal) {
        this.$store.commit('updateOrder', this.deal)
        this.dealRecords.unshift(this.deal)
        this.dealRecords.length > 5 && this.dealRecords.pop()
        this.index ++
      } else {
        this.index = 0
      }
    }
  },

  mounted () {
    setInterval(this.getDeal, this.rollTime)
  }
}
</script>
