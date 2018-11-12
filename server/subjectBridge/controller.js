const moment = require('moment')
const { transaction } = require('objection')
const { SubjectBridge } = require('./model')

module.exports = function () {
  return {
    getBySubjectId: async (id) => {
      return SubjectBridge.query()
        .where({ subject_id: id })
        .select(SubjectBridge.publicColumns)
    },

    getByStoryId: async (id) => {
      return SubjectBridge.query()
        .where({ story_id: id })
        .select(SubjectBridge.publicColumns)
    },

    deleteSubjectBridgeBySubjectId: async (id) => {
      return SubjectBridge.query()
        .where({ subject_id: id })
        .delete()
    },

    deleteSubjectBridgeByStoryId: async (id) => {
      return SubjectBridge.query()
        .where({ story_id: id })
        .delete()
    }
  }
}
