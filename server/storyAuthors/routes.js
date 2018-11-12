const controller = require('./controller')
const StoryAuthor = controller()
const StoryAuthorBridgeController = require('../storyAuthorBridge/controller')

module.exports = function (router) {
  router.put('/storyAuthors/update', function (req, res, done) {
    StoryAuthor.update(req.body)
      .then(function (storyAuthor) {
        res.json(storyAuthor)
      }).catch(done)
  })

  router.post('/storyAuthors/new', function (req, res, done) {
    StoryAuthor.new(req.body)
      .then(function (storyAuthor) {
        res.json(storyAuthor)
      }).catch(done)
  })

  router.get('/storyAuthors/delete/:id', function (req, res, done) {
    StoryAuthorBridgeController().deleteStoryAuthorBridgeByStoryAuthorId(req.params.id)
      .then(function () {
        // return the deleted record
        StoryAuthor.get(req.params.id)
          .then(function (storyAuthor) {
            res.json(storyAuthor)
            // then actually delete it
            StoryAuthor.delete(req.params.id)
          })
      })
      .catch(done)
  })

  router.get('/storyAuthors/byId/:id', function (req, res, done) {
    StoryAuthor.get(req.params.id)
      .then(storyAuthor => res.json(storyAuthor))
      .catch(done)
  })

  router.get('/storyAuthors/all', function (req, res, done) {
    StoryAuthor.getAll()
      .then(storyAuthors => res.json(storyAuthors))
      .catch(done)
  })

  router.post('/storyAuthors/create', function (req, res, done) {
    StoryAuthor.create(req.body)
      .then(function (storyAuthor) {
        res.json(storyAuthor)
        // StoryAuthor.getAll()
        //   .then(storyAuthor => res.json(storyAuthor))
    }).catch(done)
  })
}
