const moment = require('moment')
const { transaction } = require('objection')
const { ThemeBridge } = require('./model')

module.exports = function () {
  return {
    create: async (payload) => {
      return ThemeBridge.query()
        .insert({
          theme_id: payload.theme_id,
          story_id: payload.story_id
        })
    },

    getByThemeId: async (id) => {
      return ThemeBridge.query()
        .where({ theme_id: id })
        .select(ThemeBridge.publicColumns)
    },

    getByStoryId: async (id) => {
      return ThemeBridge.query()
        .where({ story_id: id })
        .select(ThemeBridge.publicColumns)
    },

    deleteThemeBridgeByThemeId: async (id) => {
      return ThemeBridge.query()
        .where({ theme_id: id })
        .delete()
    },

    deleteThemeBridgeByStoryId: async (id) => {
      return ThemeBridge.query()
        .where({ story_id: id })
        .delete()
    }
  }
}
