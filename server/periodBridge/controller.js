const moment = require('moment')
const { transaction } = require('objection')
const { PeriodBridge } = require('./model')

module.exports = function () {
  return {
    getByPeriodId: async (id) => {
      return PeriodBridge.query()
        .where({ period_id: id })
        .select(PeriodBridge.publicColumns)
        .first()
    },

    getByStoryId: async (id) => {
      return PeriodBridge.query()
        .where({ story_id: id })
        .select(PeriodBridge.publicColumns)
        .first()
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
