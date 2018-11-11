import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'

// Modules:
import categories from './modules/categories'
// import users from './modules/users'
// import stories from './modules/stories'
// import names from './modules/names'
// import periods from './modules/periods'
// import subjects from './modules/subjects'
// import themes from './modules/themes'
// import locations from './modules/locations'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  modules: {
    categories
    // users,
    // stories,
    // names,
    // periods,
    // subjects,
    // themes,
    // locations
  },
  strict: debug
})
