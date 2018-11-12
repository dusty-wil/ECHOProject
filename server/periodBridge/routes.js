const controller = require('./controller')
const PeriodBridge = controller()

module.exports = function (router) {
  router.get('/periodBridge/byPeriodId/:id', function (req, res, done) {
    PeriodBridge.getByPeriodId(req.params.id)
      .then(period => res.json(period))
      .catch(done)
  }),

  router.get('/periodBridge/byStoryId/:id', function (req, res, done) {
    PeriodBridge.getByStoryId(req.params.id)
      .then(period => res.json(period))
      .catch(done)
  }),

  router.get('/periodBridge/deleteByPeriodId/:id', function (req, res, done) {
    PeriodBridge.deletePeriodBridgeByPeriodId(req.params.id)
      .then(function () {})
      .catch(done)
  }),

  router.get('/periodBridge/deleteByStoryId/:id', function (req, res, done) {
    PeriodBridge.deletePeriodBridgeByStoryId(req.params.id)
      .then(function () {})
      .catch(done)
  })
}
