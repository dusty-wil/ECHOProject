const controller = require('./controller')
const Theme = controller()
const ThemeBridgeController = require('../themeBridge/controller')

module.exports = function (router) {
  router.put('/themes/update', function (req, res, done) {
    Theme.update(req.body)
      .then(function (theme) {
        res.json(theme)
      }).catch(done)
  })

  router.post('/themes/new', function (req, res, done) {
    Theme.new(req.body)
      .then(function (theme) {
        res.json(theme)
      }).catch(done)
  })

  router.get('/themes/delete/:id', function (req, res, done) {
    ThemeBridgeController().deleteThemeBridgeByThemeId(req.params.id)
      .then(function () {
        // return the deleted record
        Theme.get(req.params.id)
          .then(function (theme) {
            res.json(theme)
            // then actually delete it
            Theme.delete(req.params.id)
          })
      })
      .catch(done)
  })

  router.get('/themes/byId/:id', function (req, res, done) {
    Theme.get(req.params.id)
      .then(theme => res.json(theme))
      .catch(done)
  })

  router.get('/themes/all', function (req, res, done) {
    Theme.getAll()
      .then(themes => res.json(themes))
      .catch(done)
  })

  router.post('/themes/create', function (req, res, done) {
    Theme.create(req.body)
      .then(function (theme) {
        res.json(theme)
        // Theme.getAll()
        //   .then(theme => res.json(theme))
    }).catch(done)
  })
}
