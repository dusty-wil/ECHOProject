import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from './components/general/Dashboard.vue'
import ProfilePage from './components/user/ProfilePage.vue'

import AddEditNames from './components/general/AddEditName.vue'
import AddEditSubjects from './components/general/AddEditSubject.vue'
import AddEditThemes from './components/general/AddEditTheme.vue'
import AddEditPeriods from './components/general/AddEditPeriod.vue'
import AddEditLocations from './components/general/AddEditLocation.vue'
import AddEditCategories from './components/general/AddEditCategory.vue'
import AddEditStories from './components/general/AddEditStory.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {name: 'Dashboard', component: Dashboard, path: '/dashboard', props: (router) => ({})},
    {name: 'Profile', path: '/profile', component: ProfilePage},
    {name: 'Add/Edit Name', path: '/AddEditName', component: AddEditNames},
    {name: 'Add/Edit Subject', path: '/AddEditSubject', component: AddEditSubjects},
    {name: 'Add/Edit Theme', path: '/AddEditTheme', component: AddEditThemes},
    {name: 'Add/Edit Category', path: '/AddEditCategory', component: AddEditCategories},
    {name: 'Add/Edit Date', path: '/AddEditPeriod', component: AddEditPeriods},
    {name: 'Add/Edit Location', path: '/AddEditLocation', component: AddEditLocations},
    {name: 'Add/Edit Story', path: '/AddEditStory', component: AddEditStories},
    {name: 'Log Out', path: '/logout'},
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
