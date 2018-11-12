const controller = require('./controller')
const CategoryBridge = controller()

module.exports = function (router) {
  router.get('/categoryBridge/byCategoryId/:id', function (req, res, done) {
    CategoryBridge.getByCategoryId(req.params.id)
      .then(category => res.json(category))
      .catch(done)
  }),

  router.get('/categoryBridge/byStoryId/:id', function (req, res, done) {
    CategoryBridge.getByStoryId(req.params.id)
      .then(category => res.json(category))
      .catch(done)
  }),

  router.get('/categoryBridge/deleteByCategoryId/:id', function (req, res, done) {
    CategoryBridge.deleteCategoryBridgeByCategoryId(req.params.id)
      .then(function () {})
      .catch(done)
  }),

  router.get('/categoryBridge/deleteByStoryId/:id', function (req, res, done) {
    LocationBridge.deleteCategoryBridgeByStoryId(req.params.id)
      .then(function () {})
      .catch(done)
  })
}
