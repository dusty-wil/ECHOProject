const controller = require('./controller')
const Story = controller()
const Logger = require('../utils/logger').Logger
const log = Logger('app:echo:api')

module.exports = function (router) {
  router.get('/stories/byId/:id', function (req, res, done) {
    
    log.info(req.params)
    log.info(req.params.id)
    
    Story.get(req.params.id)
      .then(story => res.json(story))
      .catch(done)
  })
}
