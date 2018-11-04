const controller = require('./controller')
const Theme = controller()
const Logger = require('../utils/logger').Logger
const log = Logger('app:echo:api')

module.exports = function (router) {
  
  router.put('/themes/update', function (req, res, done) {
    Theme.update(req.body)
      .then(function (theme) {
        res.json(theme)
      }).catch(done)
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
}
