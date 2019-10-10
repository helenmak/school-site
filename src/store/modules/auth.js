import * as types from 'src/store/mutation-types'
import api from 'src/api'

import router from 'src/router'

export const state = () => ({
  isLoggedIn: false,
  user: null
})

export const getters = {
  isLoggedIn: state => state.isLoggedIn
}

export const actions = {
  async login ({ commit, dispatch }, { login, password }) {
    const userInfo = {
      email: 'elenamak@ukr.net',
      name: 'Elena',
      surname: 'Makarenko',
      subject: 'Chemistry'
    }// await this.$axios.get(api.auth.login(login, password))
    
    commit('LOGIN')
    commit('SET_USER_INFO', userInfo)
    
    router.push({ name: 'teacher-cabinet' })
    
    return userInfo
  }
}

export const mutations = {
  [types.SET_USER_INFO] (state, userInfo) {
    state.user = userInfo
  },
  [types.LOGIN] (state) {
    state.isLoggedIn = true
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
