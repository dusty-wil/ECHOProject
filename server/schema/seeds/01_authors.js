'use strict'

const ids = [1]

const authHelpers = require('../../utils/authHelpers')
exports.seed = function (knex, Promise) {
  return knex('authors')
    .whereIn('id', ids)
    .then((authors) => {
      if (authors.length === ids.length) {
        return Promise.resolve()
      }

      return knex('authors')
        .insert([
            {
                user_id: 2,
                calu_id: '112233abc',
                phone: '1234567890',
                alt_phone: '1234567890',
                address: '123 Place Rd. Cityville, PA 12345',
            }
        ])
    })
}
