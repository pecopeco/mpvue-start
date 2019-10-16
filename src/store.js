import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    missingSkey: false,
    userInfo: ''
  },
  actions: {
    setUser: ({ commit }, data) => {
      commit('setUser', data)
    },
    setSkeyStatus: ({ commit }) => {
      commit('setSkeyStatus')
    }
  },
  mutations: {
    setUser (state, data) {
      state.userInfo = data
    },
    setSkeyStatus (state) {
      state.missingSkey = !state.missingSkey
    }
  },
  getters: {}
})

export default store
