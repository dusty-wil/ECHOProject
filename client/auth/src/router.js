import Vue from 'vue'
import VueRouter from 'vue-router'

// Import Components Here:
import Dashboard from './components/general/Dashboard.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {name: 'Dashboard', component: Dashboard, path: '/dashboard', props: (router) => ({})},
    {name: 'defaultRoute', path: '/*'}
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name === 'defaultRoute') {
    return next('/dashboard')
  }
  return next()
})

export default router
