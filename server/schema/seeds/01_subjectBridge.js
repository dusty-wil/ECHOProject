'use strict'

const ids = [1,2,3,4,5,5]

const authHelpers = require('../../utils/authHelpers')
exports.seed = function (knex, Promise) {
  return knex('subjectBridge')
    .whereIn('subject_id', ids)
    .then((bridges) => {
      if (bridges.length === ids.length) {
        return Promise.resolve()
      }

      return knex('subjectBridge')
        .insert([
            { subject_id: 1, story_id: 1 },
            { subject_id: 2, story_id: 1 },
            { subject_id: 3, story_id: 2 },
            { subject_id: 4, story_id: 2 },
            { subject_id: 5, story_id: 3 },
            { subject_id: 5, story_id: 4 }
        ])
    })
}
