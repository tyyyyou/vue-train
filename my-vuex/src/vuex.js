let Vue;

class Store {
  constructor (options) {
    this.vm = new Vue({
      data: {state: options.state}
    })
    this.state = this.vm.state;
    this.mutations = options.mutations;
    this.actions = options.actions;
  }
  commit (eventName, data) {
    this.mutations[eventName](this.state, data)
  }
  dispatch (eventName, data) {
    this.actions[eventName](this, data)
  }
}

const install = (_Vue) => {
  Vue = _Vue;
  Vue.mixin({
    beforeCreate () {
      if (this.$options && this.$options.store) {
        this.$store = this.$options.store;
      } else {
        this.$store = this.$parent && this.$parent.$store;
      }
    }
  })
}

export default {
  Store,
  install
}

// new Vuex.store({
//   state: {
//     msg: ''
//   },
//   mutations: {
//     setMsg (store, data) {
//       store.msg = data;
//     }
//   },
//   actions: {
//     asyncChangeMsg ({commit}, data) {
//       commit('setMsg', data)
//     }
//   }
// })  