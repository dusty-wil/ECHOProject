import Vue from 'vue'
import VueRouter from 'vue-router'

// Import Components Here:
import Dashboard from './components/general/Dashboard.vue'
import ProfilePage from './components/user/ProfilePage.vue'

import AddEditNames from './components/AddEditName.vue'
import AddEditSubjects from './components/AddEditSubject.vue'
import AddEditThemes from './components/AddEditTheme.vue'
import AddEditStories from './components/AddEditStory.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {name: 'Dashboard', component: Dashboard, path: '/dashboard', props: (router) => ({})},
    {name: 'Profile', path: '/profile', component: ProfilePage},
    {name: 'Add Name', path: '/AddEditName', component: AddEditNames},
    {name: 'Edit Name', path: '/AddEditName/:id', component: AddEditNames},
    {name: 'Add Subject', path: '/AddEditSubject', component: AddEditSubjects},
    {name: 'Edit Subject', path: '/AddEditSubject/:id', component: AddEditSubjects},
    {name: 'Add Subject', path: '/AddEditTheme', component: AddEditThemes},
    {name: 'Edit Subject', path: '/AddEditTheme/:id', component: AddEditThemes},
    {name: 'Add Story', path: '/AddEditStory', component: AddEditStories},
    {name: 'Edit Story', path: '/AddEditStory/:id', component: AddEditStories},
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
