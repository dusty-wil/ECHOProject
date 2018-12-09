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
                title: 'Living Labor Free',
                description: 'The untold story of oppression gained by blood, tears, and sorrows.',
                storage_path: '',
                youtube_path: '_t0wB8Jb91Q',
                publish_date: '2018-10-01 00:00:00',
		approved: 1,
		featured_rotation: 1
            },
            {
                title: 'Freddie Elkes: POW',
                description: 'A POW captured by Japan in 1942.',
                storage_path: '',
                youtube_path: '84HFEQnryWk',
                publish_date: '2018-10-01 00:00:00',
		approved: 1,
		featured_rotation: 1
            },
            {
                title: 'The Crime of the Century Almost',
                description: 'The attempted robbery of the Custom House containing one million dollars.',
                storage_path: '',
                youtube_path: 'Oi4G0asaJTI',
                publish_date: '2018-10-01 00:00:00',
		approved: 1,
		featured_rotation: 1
            },
            {
                title: 'The Linsly School "Threads of History"',
                description: 'The evolution of the Linsly School uniforms.',
                storage_path: '',
                youtube_path: 'ISxd8B1FM08',
                publish_date: '2018-10-01 00:00:00',
		approved: 1,
		featured_rotation: 1
            }
        ])
    })
}
