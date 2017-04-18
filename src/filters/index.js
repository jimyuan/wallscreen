/**
 * 此处须把所有过滤器全局化
 */
import Vue from 'vue'
import dataFormat from 'FILTERS/dataFormat'

Vue.filter('dataFormat', dataFormat)
