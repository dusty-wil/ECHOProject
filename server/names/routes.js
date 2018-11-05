const controller = require('./controller')
const Name = controller()
const Logger = require('../utils/logger').Logger
const log = Logger('app:echo:api')

module.exports = function (router) {
  router.put('/names/update', function (req, res, done) {
    Name.update(req.body)
      .then(function (name) {
        res.json(name)
      }).catch(done)
  })
  router.put('/names/new', function (req, res, done) {
    Name.new(req.body)
      .then(function (name) {
        res.json(name)
      }).catch(done)
  })
  router.put('/names/delete', function (req, res, done) {
    Name.delete(req.body)
      .then(name => res.json(name))
      .catch(done)
  })
  router.get('/names/byId/:id', function (req, res, done) {
    Name.get(req.params.id)
      .then(name => res.json(name))
      .catch(done)
  })
  router.get('/names/all', function (req, res, done) {
    Name.getAll()
      .then(names => res.json(names))
      .catch(done)
  })
}
