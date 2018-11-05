import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'

// Modules:
import users from './modules/users'
import stories from './modules/stories'
import categories from './modules/categories'
import names from './modules/names'
import periods from './modules/periods'
import subjects from './modules/subjects'
import themes from './modules/themes'
import ui from './modules/ui'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  modules: {
    users,
    stories,
    categories,
    names,
    periods,
    subjects,
    themes,
    ui
  },
  strict: debug
})
