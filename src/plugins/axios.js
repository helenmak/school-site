import Vue from 'vue'
import VueAxios from 'vue-axios'
import Axios from 'axios'
import store from 'src/store'
// import tokenService from './tokenService'
// import router from 'src/router'
import api from 'src/api'
import * as R from 'ramda'

const axiosConfig = {
  baseURL: api.baseUrl,
  headers: {
    'Accept-Language': 'en-US',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'no-cache',
    'Content-type': 'application/json'
  }
}

const instance = Axios.create(axiosConfig)
const instanceWithoutInterceptor = Axios.create(axiosConfig)

// instance.interceptors.request.use(config => {
//   // Set Authorization header for protected routes
//   const accessToken = tokenService.getAccessToken()
//   if (accessToken) {
//     config.headers['Authorization'] = accessToken
//   }
//
//   return config
// })

const repeatRequest = config => {
  const { url, data, method, params } = config
  const payload = data || params
  return instanceWithoutInterceptor[method](url, payload)
}

const getNewAccessToken = refreshToken => instanceWithoutInterceptor.post(api.auth.refreshToken(), { refreshToken })

instance.interceptors.response.use(
  // if success just pass it
  R.identity,
  // if error we should check error reason
  async initialError => {
    try {
      let initialRequestConfig
      const initialResponse = initialError.response
      // if (R.propEq('status', 401, initialResponse)) {
      //   // save config of request with 401 error for repeating it later
      //   initialRequestConfig = initialResponse.config
      //   const refreshToken = tokenService.getRefreshToken()
      //   if (!refreshToken) store.dispatch('deauthenticateUser')
      //   const newAccessTokenResponse = await getNewAccessToken(refreshToken)
      //   const newAccessToken = newAccessTokenResponse.data.accessToken
      //   tokenService.setAccessToken(newAccessToken)
      //   instanceWithoutInterceptor.defaults.headers['Authorization'] = newAccessToken
      //   return repeatRequest(initialRequestConfig)
      // }
    } catch (err) {
        store.dispatch('logout')
      throw err
    }
    throw initialError
  }
)

store.axios = store.$axios = instance
Vue.use(VueAxios, instance)

export default instance
