import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'

// Modules:
import users from './modules/users'
import ui from './modules/ui'
import categories from './modules/categories'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  modules: {
    users,
    ui,
    categories
  },
  strict: debug
})
