const controller = require('./controller')
const NameBridge = controller()

module.exports = function (router) {
  router.get('/nameBridge/byNameId/:id', function (req, res, done) {
    NameBridge.getByNameId(req.params.id)
      .then(name => res.json(name))
      .catch(done)
  }),

  router.get('/nameBridge/byStoryId/:id', function (req, res, done) {
    NameBridge.getByStoryId(req.params.id)
      .then(name => res.json(name))
      .catch(done)
  }),

  router.get('/nameBridge/deleteByNameId/:id', function (req, res, done) {
    NameBridge.deleteNameBridgeByNameId(req.params.id)
      .then(function () {})
      .catch(done)
  }),

  router.get('/nameBridge/deleteByStoryId/:id', function (req, res, done) {
    NameBridge.deleteNameBridgeByStoryId(req.params.id)
      .then(function () {})
      .catch(done)
  })
}
