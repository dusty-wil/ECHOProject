const controller = require('./controller')
const Location = controller()
const Logger = require('../utils/logger').Logger
const log = Logger('app:echo:api')

module.exports = function (router) {
  router.put('/locations/update', function (req, res, done) {
    console.log(123)
    Location.update(req.body)
      .then(function (location) {
        res.json(location)
      }).catch(done)
  })
  router.put('/locations/new', function (req, res, done) {
    Location.new(req.body)
      .then(function (location) {
        res.json(location)
      }).catch(done)
  })
  router.put('/locations/delete', function (req, res, done) {
    Location.delete(req.body)
      .then(location => res.json(location))
      .catch(done)
  })
  router.get('/locations/byId/:id', function (req, res, done) {
    Location.get(req.params.id)
      .then(location => res.json(location))
      .catch(done)
  })
  router.get('/locations/all', function (req, res, done) {
    Location.getAll()
      .then(locations => res.json(locations))
      .catch(done)
  })
}
