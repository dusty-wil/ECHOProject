const controller = require('./controller')
const Category = controller()
const CategoryBridgeController = require('../categoryBridge/controller')

module.exports = function (router) {
  router.put('/categories/update', function (req, res, done) {
    Category.update(req.body)
      .then(function (category) {
        res.json(category)
      }).catch(done)
  })

  router.post('/categories/new', function (req, res, done) {
    Category.new(req.body)
      .then(function (category) {
        res.json(category)
      }).catch(done)
  })

  router.get('/categories/delete/:id', function (req, res, done) {
    CategoryBridgeController().deleteCategoryBridgeByCategoryId(req.params.id)
      .then(function () {
        // return the deleted record
        Category.get(req.params.id)
          .then(function (category) {
            res.json(category)
            // then actually delete it
            Category.delete(req.params.id)
          })
      })
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
  }),

  router.post('/categories/create', function (req, res, done) {
    Category.create(req.body).then(function () {
      Category.getAll()
        .then(category => res.json(category))
    }).catch(done)
  })
}
