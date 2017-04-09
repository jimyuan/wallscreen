<template>
  <div class="dashboard dashboard-left">
    <h1>即时最新成交</h1>
    <article id="dash5">
      <table class="deal-table">
         <thead>
           <tr>
             <th v-for="h of tHead" v-text="h"></th>
           </tr>
         </thead>
         <tbody>
           <tr v-for="deal of deals" :key="deal" class="list-item">
             <td v-for="item of deal" v-text="item"></td>
           </tr>
         </tbody>
      </table>
    </article>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tHead: ['时间', '路线', '重量(吨)', '状态'],
      deals: []
    }
  },

  methods: {
    dataFactory () {
      const seed = Math.random()
      const from = ['上海', '银川', '武汉', '成都', '重庆']
      const dest = ['柳州', '青海', '贵阳', '洛阳', '兰州']
      let time = `${this.zerofill(23 * seed | 0)} : ${this.zerofill(59 * seed | 0)}`
      let path = `${from[5 * seed | 0]} - ${dest[5 * seed | 0]}`
      let weight = 1000 * seed | 0
      let status = ['已派运', '待承运', '待调度'][3 * seed | 0]
      return [time, path, weight, status]
    },

    zerofill (val) {
      return val >= 10 ? val : `0${val}`
    }
  },

  mounted () {
    let int = 2000
    setInterval(() => {
      int = 2000 * Math.random() | 0
      let len = this.deals.length
      this.deals.unshift(this.dataFactory())
      len > 4 && this.deals.pop()
    }, int)
  }

}
</script>
