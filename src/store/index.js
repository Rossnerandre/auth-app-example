import { createStore } from 'vuex';
import authModule from './modules/auth/index.js';

export default createStore({
  state: {
    token: ''
  },
  mutations: {
    getToken(state, payload) {
      state.token = payload;
    }
  },
  actions: {
  },
  modules: {
    auth: authModule
  }
})
