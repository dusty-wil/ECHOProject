'use strict'

const ids = [1]

const authHelpers = require('../../utils/authHelpers')
exports.seed = function (knex, Promise) {
  return knex('stories')
    .whereIn('id', ids)
    .then((stories) => {
      if (stories.length === ids.length) {
        return Promise.resolve()
      }

      return knex('stories')
        .insert([
            {
                id: 1,
                author_id: 1,
                approver_id: 1,
                approved: 1,
                title: 'my cool story',
                description: 'a cool story about cool things',
                county: 'allegheny county',
                storage_path: '',
                youtube_path: '',
                publish_date: ''
            }
        ])
    })
}
