import Vue from 'vue'
import router from './router.js'
import App from './components/App.vue'

new Vue({
  router: router,
  el: '#app',
  render: h => h(App)
})
