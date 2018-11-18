const controller = require('./controller')
const ThemeBridge = controller()

module.exports = function (router) {
  router.get('/themeBridge/byThemeId/:id', function (req, res, done) {
    ThemeBridge.getByThemeId(req.params.id)
      .then(theme => res.json(theme))
      .catch(done)
  }),

  router.get('/themeBridge/byStoryId/:id', function (req, res, done) {
    ThemeBridge.getByStoryId(req.params.id)
      .then(theme => res.json(theme))
      .catch(done)
  }),

  router.get('/themeBridge/deleteByThemeId/:id', function (req, res, done) {
    ThemeBridge.deleteThemeBridgeByThemeId(req.params.id)
      .then(function () {})
      .catch(done)
  }),

  router.get('/themeBridge/deleteByStoryId/:id', function (req, res, done) {
    ThemeBridge.deleteThemeBridgeByStoryId(req.params.id)
      .then(function () {})
      .catch(done)
  }),

  router.post('/themeBridge/new', function (req, res, done) {
    ThemeBridge.create(req.body)
      .then(function (themeBridge) {
        res.json(themeBridge)
      }).catch(done)
  })
}
