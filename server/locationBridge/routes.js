const controller = require('./controller')
const LocationBridge = controller()

module.exports = function (router) {
  router.get('/locationBridge/byLocationId/:id', function (req, res, done) {
    LocationBridge.getByLocationId(req.params.id)
      .then(location => res.json(location))
      .catch(done)
  }),

  router.get('/locationBridge/byStoryId/:id', function (req, res, done) {
    LocationBridge.getByStoryId(req.params.id)
      .then(location => res.json(location))
      .catch(done)
  }),

  router.get('/locationBridge/deleteByLocationId/:id', function (req, res, done) {
    LocationBridge.deleteLocationBridgeByLocationId(req.params.id)
      .then(function () {})
      .catch(done)
  }),

  router.get('/locationBridge/deleteByStoryId/:id', function (req, res, done) {
    LocationBridge.deleteLocationBridgeByStoryId(req.params.id)
      .then(function () {})
      .catch(done)
  })
}
