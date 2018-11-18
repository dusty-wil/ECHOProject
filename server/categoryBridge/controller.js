const moment = require('moment')
const { transaction } = require('objection')
const { CategoryBridge } = require('./model')

module.exports = function () {
  return {
    create: async (payload) => {
      return CategoryBridge.query()
        .insert({
          category_id: payload.category_id,
          story_id: payload.story_id
        })
    },

    getByCategoryId: async (id) => {
      return CategoryBridge.query()
        .where({ category_id: id })
        .select(CategoryBridge.publicColumns)
    },

    getByStoryId: async (id) => {
      return CategoryBridge.query()
        .where({ story_id: id })
        .select(CategoryBridge.publicColumns)
    },

    deleteCategoryBridgeByCategoryId: async (id) => {
      return CategoryBridge.query()
        .where({ category_id: id })
        .delete()
    },

    deleteCategoryBridgeByStoryId: async (id) => {
      return CategoryBridge.query()
        .where({ story_id: id })
        .delete()
    }
  }
}
