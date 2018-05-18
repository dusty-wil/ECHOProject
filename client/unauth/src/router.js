import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginPage from './components/user/LoginPage.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {path: '/login', alias: '/', component: LoginPage},
    {path: '/*', name: 'defaultRoute'}
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name === 'defaultRoute') {
    return next('/')
  }
  return next()
})

export default router
