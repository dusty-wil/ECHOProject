import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'

// Modules:
import users from './modules/users'
import stories from './modules/stories'
import ui from './modules/ui'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  modules: {
    users,
    stories,
    ui
  },
  strict: debug
})
