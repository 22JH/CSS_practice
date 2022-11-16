import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    detailView: false,
    IndexDetailData: null,
  },
  getters: {
    detailOn(state) {
      return state.detailView
    }
  },
  mutations: {
    SHOW_DETAIL(state, e) {
      // console.log(state.detailView)
      state.detailView = true
      // console.log(state.detailView)
      state.IndexDetailData = e
    }
  },
  actions: {
  },
  modules: {
  }
})
