const controller = require('./controller')
const Location = controller()
const LocationBridgeController = require('../locationBridge/controller')

module.exports = function (router) {
  router.put('/locations/update', function (req, res, done) {
    Location.update(req.body)
      .then(function (location) {
        res.json(location)
      }).catch(done)
  })

  router.post('/locations/new', function (req, res, done) {
    Location.new(req.body)
      .then(function (location) {
        res.json(location)
      }).catch(done)
  })

  router.get('/locations/delete/:id', function (req, res, done) {
    console.log('calling bridge')
    console.log(req.params.id)
    LocationBridgeController().deleteLocationBridgeByLocationId(req.params.id)
      .then(function () {
        // return the deleted record
        Location.get(req.params.id)
          .then(function (location) {
            res.json(location)
            // then actually delete it
            Location.delete(req.params.id)
          })
      })
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

  router.post('/locations/create', function (req, res, done) {
    Location.create(req.body)
      .then(function (location) {
        res.json(location)
        // Location.getAll()
        //   .then(location => res.json(location))
    }).catch(done)
  })
}
