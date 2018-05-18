import Vue from 'vue'
import store from './store/main'
import router from './router'
import App from './components/App.vue'

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
