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
        <transition-group tag="tbody" name="list-row" mode="out-in" v-if="this.progressRecords">
          <tr v-for="record of progressRecords" :key="record.id" class="list-item">
             <td v-text="record.companyName"></td>
             <td v-text="record.businessTypeName"></td>
             <td v-text="record.statusName"></td>
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
      tHead: ['公司', '业务类型', '状态'],
      progressRecords: [],
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

    record () {
      return this.newData[this.index]
    }
  },

  watch: {
    newData () {
      this.index = 0
      this.getProgress()
    }
  },

  methods: {
    getProgress () {
      // this.progressRecords.unshift(this.data)
      // if (this.progressRecords.length > 6) this.progressRecords.pop()
      if (this.record) {
        this.progressRecords.unshift(this.record)
        this.progressRecords.length > 6 && this.progressRecords.pop()
        this.index ++
      } else {
        this.index = 0
      }
    }
  },

  mounted () {
    setInterval(this.getProgress, this.rollTime)
  }
}
</script>
