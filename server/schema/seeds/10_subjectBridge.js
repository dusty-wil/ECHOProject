'use strict'

const ids = [1,2,3,2,3,4,1,3,4]

const authHelpers = require('../../utils/authHelpers')
exports.seed = function (knex, Promise) {
  return knex('subjectBridge')
    .then((subjectBridge) => {
        return Promise.resolve()
      if (subjectBridge.length >= ids.length) {
        return Promise.resolve()
      }

      return knex('subjectBridge')
        .insert([
            { subject_id: 1, story_id: 1 }
        ])
        .debug(true)
    })
}
