import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  //mutations与state有关，需要传入state
  mutations: {
    INCREMENT(state) {
      state.count++
    },
    DECRMENT(state) {
      state.count--
    }
  },
  //actions与mutations有关，需要传入commit，commit对关的mutations
  actions: {
    increment({ commit }) {
      commit('INCREMENT')
    },
    decrement({ commit }) {
      commit('DECRMENT')
    },
    incrementIfOdd({ commit, state }) {
      if (state.count % 2 == 1) {
        commit('INCREMENT')
      }
    },
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit('INCREMENT')
      }, 1000);
    }
  },
  //getters与state有关，需传入state
  getters: {
    evenOrOdd(state) {
      return state.count % 2 == 0 ? '偶数' : '奇数'
    }
  }
})
