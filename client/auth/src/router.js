import Vue from 'vue'
import VueRouter from 'vue-router'

// Import Components Here:
import Dashboard from './components/general/Dashboard.vue'
import ProfilePage from './components/user/ProfilePage.vue'

import AddEditNames from './components/general/AddEditName.vue'
import AddEditSubjects from './components/general/AddEditSubject.vue'
import AddEditThemes from './components/general/AddEditTheme.vue'
import AddEditPeriods from './components/general/AddEditPeriod.vue'
import AddEditCategories from './components/general/AddEditCategory.vue'
import AddEditStories from './components/general/AddEditStory.vue'

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
    {name: 'Add Theme', path: '/AddEditTheme', component: AddEditThemes},
    {name: 'Edit Theme', path: '/AddEditTheme/:id', component: AddEditThemes},
    {name: 'Add Category', path: '/AddEditCategory', component: AddEditCategories},
    {name: 'Edit Category', path: '/AddEditCategory/:id', component: AddEditCategories},
    {name: 'Add Period', path: '/AddEditPeriod', component: AddEditPeriods},
    {name: 'Edit Period', path: '/AddEditPeriod/:id', component: AddEditPeriods},
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
