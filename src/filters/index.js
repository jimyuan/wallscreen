/**
 * 此处须把所有过滤器全局化
 */
import Vue from 'vue'
import dataFormat from 'FILTERS/dataFormat'
import timeFormat from 'FILTERS/dateTimeFormatter'

Vue.filter('dataFormat', dataFormat)
Vue.filter('timeFormat', timeFormat)
