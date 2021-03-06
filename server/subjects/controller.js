'use strict'

const moment = require('moment')
const { transaction } = require('objection')
const { Subject } = require('./model')

module.exports = function () {
  return {
    get: async (id) => {
      return Subject.query()
        .where({ id })
        .select(Subject.publicColumns)
        .first()
        .throwIfNotFound()
    },

    getAll: async () => {
      return Subject.query()
        .select(Subject.publicColumns)
        .orderBy('name')
        .throwIfNotFound()
    },

    getByStoryId: async (id) => {
      return Subject.query()
        .select(Subject.publicColumns)
        .join(
          'subjectBridge', 
          'subjectBridge.subject_id', 
          'subjects.id'
        )
        .where('subjectBridge.story_id', id)
    },

    update: async (payload) => {
      return Subject.query()
        .patchAndFetchById(
          payload.id,
          {
            name: payload.name,
            description: payload.description
          }
        )
        .throwIfNotFound()
    },
 
    create: async (payload) => {
      return Subject.query()
        .insert({
          name: payload.name,
          description: payload.description
        })
    },

    new: async (payload) => {
      return Subject.query()
        .insert({
          name: payload.name,
          description: payload.description
        })
    },

    delete: async (id) => {
      return Subject.query()
        .where({id: id})
        .delete()
    }
  }
}
