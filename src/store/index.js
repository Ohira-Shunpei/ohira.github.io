import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user_token: { // 追加
      uid: '',
      "access-token": '',
      client: '',
    },
    flash_message: { // 追加
      status: false,
      messasge: ''
    },
  },
  mutations: {
    USER_LOGIN(state, user_token) {
      state.user_token = user_token
    },
    setMessage(state, payload) { // 追加
      state.flash_message = payload
    },
  },
  actions: {
    async userLogin({ commit }, user_token) {
      commit('USER_LOGIN', user_token)
      return user_token
    },
  },
  plugins: [createPersistedState({})],
  modules: {
  }
})
