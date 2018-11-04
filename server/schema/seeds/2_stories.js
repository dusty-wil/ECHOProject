'use strict'

const ids = [1,2,3,4]

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
                author_id: 1,
                approver_id: 1,
                approved: 1,
                title: 'Living Labor Free',
                description: 'this is a placeholder description of the Living Labor Free story',
                county: 'allegheny county',
                storage_path: '',
                youtube_path: 't0wB8Jb91Q',
                publish_date: '2018-10-01 00:00:00'
            },
            {
                author_id: 1,
                approver_id: 1,
                approved: 1,
                title: 'Freddie Elkes: POW',
                description: 'this is a placeholder description of the Freddie Elkes: POW  story',
                county: 'allegheny county',
                storage_path: '',
                youtube_path: '84HFEQnryWk',
                publish_date: '2018-10-01 00:00:00'
            },
            {
                author_id: 1,
                approver_id: 1,
                approved: 1,
                title: 'The Crime of the Century Almost',
                description: 'this is a placeholder description of the The Crime of the Century Almost story',
                county: 'allegheny county',
                storage_path: '',
                youtube_path: 'Oi4G0asaJTI',
                publish_date: '2018-10-01 00:00:00'
            },
            {
                author_id: 1,
                approver_id: 1,
                approved: 1,
                title: 'The Linsly School "Threads of History"',
                description: 'this is a placeholder description of the The Linsley School "Threads of History" story',
                county: 'allegheny county',
                storage_path: '',
                youtube_path: 'ISxd8B1FM08',
                publish_date: '2018-10-01 00:00:00'
            }
        ])
    })
}
