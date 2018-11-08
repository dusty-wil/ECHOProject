const controller = require('./controller')
const Story = controller()
const Logger = require('../utils/logger').Logger
const log = Logger('app:echo:api')

module.exports = function (router) {
  router.put('/stories/update', function (req, res, done) {
    Story.update(req.body)
      .then(function (story) {
        res.json(story)
      }).catch(done)
  })
  router.put('/stories/new', function (req, res, done) {
    Story.new(req.body)
      .then(function (story) {
        res.json(story)
      }).catch(done)
  })
  router.put('/stories/delete', function (req, res, done) {
    Story.delete(req.body)
      .then(story => res.json(story))
      .catch(done)
  })
  router.get('/stories/byId/:id', function (req, res, done) {
    Story.get(req.params.id)
      .then(story => res.json(story))
      .catch(done)
  })
  router.get('/stories/all', function (req, res, done) {
    Story.getAll()
      .then(stories => res.json(stories))
      .catch(done)
  })
}
