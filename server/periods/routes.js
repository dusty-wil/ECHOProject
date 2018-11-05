const controller = require('./controller')
const Period = controller()
const Logger = require('../utils/logger').Logger
const log = Logger('app:echo:api')

module.exports = function (router) {
  router.put('/periods/update', function (req, res, done) {
    Period.update(req.body)
      .then(function (period) {
        res.json(period)
      }).catch(done)
  })
  router.put('/periods/new', function (req, res, done) {
    Period.new(req.body)
      .then(function (period) {
        res.json(period)
      }).catch(done)
  })
  router.put('/periods/delete', function (req, res, done) {
    Period.delete(req.body)
      .then(period => res.json(period))
      .catch(done)
  })
  router.get('/periods/byId/:id', function (req, res, done) {
    Period.get(req.params.id)
      .then(period => res.json(period))
      .catch(done)
  })
  router.get('/periods/all', function (req, res, done) {
    Period.getAll()
      .then(periods => res.json(periods))
      .catch(done)
  })
}
