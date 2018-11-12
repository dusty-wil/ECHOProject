const moment = require('moment')
const { transaction } = require('objection')
const { LocationBridge } = require('./model')

module.exports = function () {
  return {
    getByLocationId: async (id) => {
      return LocationBridge.query()
        .where({ location_id: id })
        .select(LocationBridge.publicColumns)
    },

    getByStoryId: async (id) => {
      return LocationBridge.query()
        .where({ story_id: id })
        .select(LocationBridge.publicColumns)
    },

    deleteLocationBridgeByLocationId: async (id) => {
      return LocationBridge.query()
        .where({ location_id: id })
        .delete()
    },

    deleteLocationBridgeByStoryId: async (id) => {
      return LocationBridge.query()
        .where({ story_id: id })
        .delete()
    }
  }
}
