import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginPage from './components/user/LoginPage.vue'
import Home from './components/general/Home.vue'
import About from './components/general/About.vue'
import SingleStoryResult from './components/search/SingleStory.vue'
import ManyStoryResults from './components/search/ManyStories.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {path: '/home', alias: '/', component: Home},
    {path: '/login', component: LoginPage},
    {path: '/about', component: About},
    // search endpoints
    {path: '/story/search/byCategory/:id', component: ManyStoryResults},
    {path: '/story/search/byDate/:id', component: ManyStoryResults},
    {path: '/story/search/byName/:id', component: ManyStoryResults},
    {path: '/story/search/byPeriod/:id', component: ManyStoryResults},
    {path: '/story/search/bySubject/:id', component: ManyStoryResults},
    {path: '/story/search/byTheme/:id', component: ManyStoryResults},
    {path: '/story/search/byAuthor/:id', component: ManyStoryResults},
    {path: '/story/search/byLocation/:id', component: ManyStoryResults},
    {path: '/story/search/:searchTerm/matching/:searchValue', component: ManyStoryResults},
    // single story path
    {path: '/story/byId/:id', component: SingleStoryResult},
    // default
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
