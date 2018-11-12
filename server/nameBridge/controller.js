const moment = require('moment')
const { transaction } = require('objection')
const { NameBridge } = require('./model')

module.exports = function () {
  return {
    getByNameId: async (id) => {
      return NameBridge.query()
        .where({ name_id: id })
        .select(NameBridge.publicColumns)
        .first()
    },

    getByStoryId: async (id) => {
      return NameBridge.query()
        .where({ story_id: id })
        .select(NameBridge.publicColumns)
        .first()
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
