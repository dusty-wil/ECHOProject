const controller = require('./controller')
const Period = controller()
const PeriodBridgeController = require('../periodBridge/controller')

module.exports = function (router) {
  router.put('/periods/update', function (req, res, done) {
    Period.update(req.body)
      .then(function (period) {
        res.json(period)
      }).catch(done)
  })

  router.post('/periods/new', function (req, res, done) {
    Period.new(req.body)
      .then(function (period) {
        res.json(period)
      }).catch(done)
  })

  router.get('/periods/delete/:id', function (req, res, done) {
    PeriodBridgeController().deletePeriodBridgeByPeriodId(req.params.id)
      .then(function () {
        // return the deleted record
        Period.get(req.params.id)
          .then(function (period) {
            res.json(period)
            // then actually delete it
            Period.delete(req.params.id)
          })
      })
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

  router.post('/periods/create', function (req, res, done) {
    Period.create(req.body)
      .then(function (period) {
        res.json(period)
        // Category.getAll()
        //   .then(category => res.json(category))
    }).catch(done)
  })
}
