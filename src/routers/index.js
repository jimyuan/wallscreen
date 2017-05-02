import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    component: resolve => require(['PAGES/Home'], resolve)
  }, {
    name: '9156',
    path: '/9156',
    component: resolve => require(['PAGES/9156'], resolve)
  }, {
    name: '91steel',
    path: '/91steel',
    component: resolve => require(['PAGES/91steel'], resolve)
  }, {
    name: 'ebaoli',
    path: '/ebaoli',
    component: resolve => require(['PAGES/Ebaoli'], resolve)
  }]
})
export default router
