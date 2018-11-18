const moment = require('moment')
const { transaction } = require('objection')
const { NameBridge } = require('./model')

module.exports = function () {
  return {
    create: async (payload) => {
      return NameBridge.query()
        .insert({
          name_id: payload.name_id,
          story_id: payload.story_id
        })
    },

    getByNameId: async (id) => {
      return NameBridge.query()
        .where({ name_id: id })
        .select(NameBridge.publicColumns)
    },

    getByStoryId: async (id) => {
      return NameBridge.query()
        .where({ story_id: id })
        .select(NameBridge.publicColumns)
    },

    deleteNameBridgeByNameId: async (id) => {
      return NameBridge.query()
        .where({ name_id: id })
        .delete()
    },

    deleteNameBridgeByStoryId: async (id) => {
      return NameBridge.query()
        .where({ story_id: id })
        .delete()
    }
  }
}
