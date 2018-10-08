const controller = require('./controller')
const Story = controller()

module.exports = function (router) {
  router.get('/stories/byId/:id', function (req, res, done) {
    Story.get(req.params.id)
      .then(story => res.json(story))
      .catch(done)
  })
}
