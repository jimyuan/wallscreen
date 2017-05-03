import 'normalize.css'
import 'echarts/map/js/china-contour'
import Vue from 'vue'
import App from 'COMPONENTS/App'
import router from 'ROUTERS/'
import store from 'STORE/store'
import './filters/'

Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV !== 'production'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
