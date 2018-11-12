const controller = require('./controller')
const StoryAuthorBridge = controller()

module.exports = function (router) {
  router.get('/storyAuthorBridge/byStoryAuthorId/:id', function (req, res, done) {
    StoryAuthorBridge.getByStoryAuthorId(req.params.id)
      .then(storyAuthor => res.json(storyAuthor))
      .catch(done)
  }),

  router.get('/storyAuthorBridge/byStoryId/:id', function (req, res, done) {
    StoryAuthorBridge.getByStoryId(req.params.id)
      .then(storyAuthor => res.json(storyAuthor))
      .catch(done)
  }),

  router.get('/storyAuthorBridge/deleteByStoryAuthorId/:id', function (req, res, done) {
    StoryAuthorBridge.deleteStoryAuthorBridgeByStoryAuthorId(req.params.id)
      .then(function () {})
      .catch(done)
  }),

  router.get('/storyAuthorBridge/deleteByStoryId/:id', function (req, res, done) {
    StoryAuthorBridge.deleteStoryAuthorBridgeByStoryId(req.params.id)
      .then(function () {})
      .catch(done)
  })
}
