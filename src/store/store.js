import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title:'',
    count: 0,
    token: ''
  },
  mutations: {
    updateTitle(state,title){
      state.title = title
    },
    increment(state) {
      state.count++
    },
    updateToken: (state, data) => {
      localStorage.token = data;
      state.token = data;
    },
    deleteToken: (state) => {
      localStorage.removeItem('token');
      state.token = null
    },
  }
})
