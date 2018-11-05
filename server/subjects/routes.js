const controller = require('./controller')
const Subject = controller()
const Logger = require('../utils/logger').Logger
const log = Logger('app:echo:api')

module.exports = function (router) {
  router.put('/subjects/update', function (req, res, done) {
    Subject.update(req.body)
      .then(function (subject) {
        res.json(subject)
      }).catch(done)
  })
  router.put('/subjects/new', function (req, res, done) {
    Subject.new(req.body)
      .then(function (subject) {
        res.json(subject)
      }).catch(done)
  })
  router.put('/subjects/delete', function (req, res, done) {
    Subject.delete(req.body)
      .then(subject => res.json(subject))
      .catch(done)
  })
  router.get('/subjects/byId/:id', function (req, res, done) {
    Subject.get(req.params.id)
      .then(subject => res.json(subject))
      .catch(done)
  })
  router.get('/subjects/all', function (req, res, done) {
    Subject.getAll()
      .then(subjects => res.json(subjects))
      .catch(done)
  })
}
