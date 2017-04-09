/**
 * 此处须把所有过滤器全局化
 */
import Vue from 'vue'

Vue.filter('dateTimeFormatter', require('./dateTimeFormatter').default)
Vue.filter('dataFormat', require('./dataFormat').default)
