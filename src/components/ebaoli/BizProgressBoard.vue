<template>
  <div class="dash dash-bargain">
    <h1>业务办理进度</h1>
    <div class="board">
      <table class="deal-table">
        <thead>
          <tr>
            <th v-for="h of tHead" v-text="h"></th>
          </tr>
        </thead>
        <transition-group tag="tbody" name="list-row" mode="out-in">
          <tr v-for="biz of bizes" :key="biz" class="list-item">
             <td v-for="item of biz" v-text="item"></td>
           </tr>
        </transition-group>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tHead: ['公司', '业务类型', '状态'],
      bizes: []
    }
  },

  methods: {
    dataFactory () {
      const seed = Math.random()
      let company = ['上海', '北京', '天津', '重庆'][4 * seed | 0]
      let status = ['提交', '审核通过', '审核中'][3 * seed | 0]
      return [`${company}公司`, `${company}业务`, status]
    }
  },

  mounted () {
    for (let i = 0; i < 6; i++) {
      this.bizes.push(this.dataFactory())
    }
    setInterval(() => {
      this.bizes.pop()
      this.bizes.unshift(this.dataFactory())
    }, 5000)
  }
}
</script>
