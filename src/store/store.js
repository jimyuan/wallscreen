import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    playMode: false,
    order: {},
    rollTime: 10 * 1000
  },
  mutations: {
    updateOrder: (state, data) => {
      state.order = data
    },

    play: (state, data) => {
      state.playMode = data
    }
  }
})
