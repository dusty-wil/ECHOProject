const moment = require('moment')
const { transaction } = require('objection')
const { PeriodBridge } = require('./model')

module.exports = function () {
  return {
    create: async (payload) => {
      return PeriodBridge.query()
        .insert({
          period_id: payload.period_id,
          story_id: payload.story_id
        })
    },

    getByPeriodId: async (id) => {
      return PeriodBridge.query()
        .where({ period_id: id })
        .select(PeriodBridge.publicColumns)
    },

    getByStoryId: async (id) => {
      return PeriodBridge.query()
        .where({ story_id: id })
        .select(PeriodBridge.publicColumns)
    },

    deletePeriodBridgeByPeriodId: async (id) => {
      return PeriodBridge.query()
        .where({ period_id: id })
        .delete()
    },

    deletePeriodBridgeByStoryId: async (id) => {
      return PeriodBridge.query()
        .where({ story_id: id })
        .delete()
    }
  }
}
