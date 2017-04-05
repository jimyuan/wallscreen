<template>
  <section>
    <china-map></china-map>
    <div class="dash-group">
      <dash-board-1></dash-board-1>
      <dash-board-2></dash-board-2>
      <dash-board-3></dash-board-3>
      <dash-board-4></dash-board-4>
    </div>
  </section>
</template>

<script>
import ChinaMap from 'COMPONENTS/ChinaMap'
import DashBoard1 from 'COMPONENTS/DB1'
import DashBoard2 from 'COMPONENTS/DB2'
import DashBoard3 from 'COMPONENTS/DB3'
import DashBoard4 from 'COMPONENTS/DB4'

export default {
  components: {
    ChinaMap, DashBoard1, DashBoard2, DashBoard3, DashBoard4
  }
}
</script>
