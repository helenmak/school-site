/**
 * @desc store module for general purpose
 */
import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'


Vue.use(Vuex)

export const state = {
  globalSpinnerVisible: false
}

export const getters = {
  getSpinnerVisibilityStatus: state => state.globalSpinnerVisible
}

export const actions = {}

export const mutations = {
  // [types.SET_SPINNER_STATUS] (state, status) {
  //   state.globalSpinnerVisible = status
  // }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules: {
    auth
  }
})
