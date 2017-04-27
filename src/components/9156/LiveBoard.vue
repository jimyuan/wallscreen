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
    newData () {
      return this.data
    }
  },

  watch: {
    // data () {
    //   this.getDeal()
    //   this.index = 0
    // }
  },

  methods: {
    getDeal () {
      if (this.index <= 5) {
        this.dealRecords.push(this.newData[this.index])
        this.index ++
      }
      setInterval(() => {
        if (this.newData[this.index]) {
          this.dealRecords.unshift(this.newData[this.index])
          if (this.dealRecords.length > 5) this.dealRecords.pop()
          this.index ++
        }
      }, 1500)
    }
  }
}
</script>
