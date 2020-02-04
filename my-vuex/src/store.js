import Vue from 'vue';
// import Vuex from './vuex';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: ''
  },
  mutations: {
    setMsg (store, data) {
      store.msg = data;
    }
  },
  actions: {
    asyncChangeMsg ({commit}, data) {
      commit('setMsg', data)
    }
  }
})  