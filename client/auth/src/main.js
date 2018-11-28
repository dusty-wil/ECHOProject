import Vue from 'vue'
import store from './store/main'
import router from './router'
import App from './components/App.vue'

const moment = require('moment')

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
