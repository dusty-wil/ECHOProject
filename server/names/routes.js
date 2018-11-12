const controller = require('./controller')
const Name = controller()
const NameBridgeController = require('../nameBridge/controller')

module.exports = function (router) {
  router.put('/names/update', function (req, res, done) {
    Name.update(req.body)
      .then(function (name) {
        res.json(name)
      }).catch(done)
  })

  router.post('/names/new', function (req, res, done) {
    Name.new(req.body)
      .then(function (name) {
        res.json(name)
      }).catch(done)
  })

  router.get('/names/delete/:id', function (req, res, done) {
    NameBridgeController().deleteNameBridgeByNameId(req.params.id)
      .then(function () {
        // return the deleted record
        Name.get(req.params.id)
          .then(function (name) {
            res.json(name)
            // then actually delete it
            Name.delete(req.params.id)
          })
      })
      .catch(done)
  })

  router.get('/names/byId/:id', function (req, res, done) {
    Name.get(req.params.id)
      .then(name => res.json(name))
      .catch(done)
  })

  router.get('/names/all', function (req, res, done) {
    Name.getAll()
      .then(names => res.json(names))
      .catch(done)
  })

  router.post('/names/create', function (req, res, done) {
    Name.create(req.body)
      .then(function (name) {
        res.json(name)
        // Category.getAll()
        //   .then(category => res.json(category))
    }).catch(done)
  })
}
