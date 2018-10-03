import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginPage from './components/user/LoginPage.vue'
import Home from './components/general/Home.vue'
import About from './components/general/About.vue'
import Results from './components/general/ResultsTest.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {path: '/home', alias: '/', component: Home},
    {path: '/login', component: LoginPage},
    {path: '/about', component: About},
    {path: '/results', component: Results},
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
