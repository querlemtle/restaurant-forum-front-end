import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from './../apis/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false
  },
  getters: {
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        // 展開預設值
        ...state.currentUser,
        // 展開 data.user 傳入的資料，並覆蓋掉 Vuex state 中的 currentUser
        ...currentUser
      }
      // 使用者的登入狀態改為 true
      state.isAuthenticated = true
    }
  },
  actions: {
    async fetchCurrentUser ({ commit }) {
      try {
        const { data } = await usersAPI.getCurrentUser()
        if (data.status === 'error') {
          throw new Error(data.message)
        }
        const { id, name, email, image, isAdmin } = data
        // 以 commit 發動 mutations 裡的 setCurrentUser，每次換路由時更新 state
        commit('setCurrentUser', {
          id, name, email, image, isAdmin
        })
      } catch (error) {
        console.error(error.message)
      }
    }
  },
  modules: {
  }
})
