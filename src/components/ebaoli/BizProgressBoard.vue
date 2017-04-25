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
          <tr v-for="record of progressRecords" :key="record" class="list-item">
             <td v-for="item of record" v-text="item"></td>
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
      tHead: ['公司', '业务类型', '状态'],
      progressRecords: []
    }
  },

  watch: {
    data () {
      this.getProgress()
    }
  },

  methods: {
    getProgress () {
      this.progressRecords.unshift([
        this.data.companyName,
        this.data.businessTypeName,
        this.data.statusName
      ])
      if (this.progressRecords.length > 6) this.progressRecords.pop()
    }
  }
}
</script>
