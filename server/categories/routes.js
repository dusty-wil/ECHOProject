const controller = require('./controller')
const Category = controller()
const Logger = require('../utils/logger').Logger
const log = Logger('app:echo:api')

module.exports = function (router) {
  router.put('/categories/update', function (req, res, done) {
    Category.update(req.body)
      .then(function (category) {
        res.json(category)
      }).catch(done)
  })
  router.put('/categories/new', function (req, res, done) {
    Category.new(req.body)
      .then(function (category) {
        res.json(category)
      }).catch(done)
  })
  router.put('/categories/delete', function (req, res, done) {
    Category.delete(req.body)
      .then(category => res.json(category))
      .catch(done)
  })
  router.get('/categories/byId/:id', function (req, res, done) {
    Category.get(req.params.id)
      .then(category => res.json(category))
      .catch(done)
  })
  router.get('/categories/all', function (req, res, done) {
    Category.getAll()
      .then(categories => res.json(categories))
      .catch(done)
  })
}
