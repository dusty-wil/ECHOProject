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
  router.get('/categoryBridge/all', function (req, res, done) {
    CategoryBridge.getAll()
      .then(category => res.json(category))
      .catch(done)
  }),
  router.get('/categoryBridge/delete/:id', function(req,res,done) {
    CategoryBridge.deleteCategoryBridge(req.params.id)
      .then(function(){})
      .catch(done)
  })
}
