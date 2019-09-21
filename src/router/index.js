import Vue from 'vue'
import Router from 'vue-router'
import * as R from 'ramda'

import store from 'src/store'
import routes from 'src/router/routes'


Vue.use(Router)

export const homePath = '/'
export const loginPath = '/login'

const isLoginRoute = R.propEq('path', loginPath)
const hasMatchedRoutes = R.pathSatisfies(R.gt(R.__, 0), ['matched', 'length'])

const router = new Router({
  mode: 'history',
  routes
});


router.beforeEach((to, from, next) => {
  const isLoggedIn = R.path(['getters', 'isLoggedIn'], store)
  const hasMatching = hasMatchedRoutes(to)
  const isGoingToLogin = isLoginRoute(to)
  const isProtectedRoute = R.not(isGoingToLogin)
  if (hasMatching) {
    if (isGoingToLogin && isLoggedIn) next(homePath)
    if (isProtectedRoute && !isLoggedIn) next(loginPath)
    next()
  } else {
    const path = isLoggedIn ? homePath : loginPath
    next(path)
  }
})

export default router;
