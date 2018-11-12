const controller = require('./controller')
const Story = controller()
const Logger = require('../utils/logger').Logger
const log = Logger('app:echo:api')

const CategoryBridgeController = require('../categoryBridge/controller')
const LocationBridgeController = require('../locationBridge/controller')
const NameBridgeController = require('../nameBridge/controller')
const PeriodBridgeController = require('../periodBridge/controller')
const SubjectBridgeController = require('../subjectBridge/controller')

module.exports = function (router) {
  router.put('/stories/update', function (req, res, done) {
    Story.update(req.body)
      .then(function (story) {
        res.json(story)
      }).catch(done)
  })
  router.put('/stories/new', function (req, res, done) {
    Story.new(req.body)
      .then(function (story) {
        res.json(story)
      }).catch(done)
  })
  router.put('/stories/delete', function (req, res, done) {
    Story.delete(req.body)
      .then(story => res.json(story))
      .catch(done)
  })
  router.get('/stories/byId/:id', function (req, res, done) {
    Story.get(req.params.id)
      .then(function (story) {
        // hoooooooooly crap is there a better way to do this???
        CategoryBridgeController().getByStoryId(story.id)
        .then(function (categories) {
          story.categories = []
          for (var category of categories) {
            story.categories.push(category.category_id)
          }

          PeriodBridgeController().getByStoryId(story.id)
          .then(function (periods) {
            story.periods = []
            for (var period of periods) {
              story.periods.push(period.period_id)
            }

            SubjectBridgeController().getByStoryId(story.id)
            .then(function (subjects) {
              story.subjects = []
              for (var subject of subjects) {
                story.subjects.push(subject.subject_id)
              }

              LocationBridgeController().getByStoryId(story.id)
              .then(function (locations) {
                story.locations = []
                for (var location of locations) {
                  story.locations.push(location.location_id)
                }

                NameBridgeController().getByStoryId(story.id)
                .then(function (names) {
                  story.names = []
                  for (var name of names) {
                    story.names.push(name.name_id)
                  }

                  // storyAuthorBridgeController().getByStoryId(story.id)
                  // .then(function (storyAuthors) {
                  //   story.authors = []
                  //   for (var author of storyAuthors) {
                  //     story.authors.push(author.author_id)
                  //   }

                  //   res.json(story)
                  // })

                  res.json(story)
                })
              })
            })
          })
        })
      })
      .catch(done)
  })
  router.get('/stories/all', function (req, res, done) {
    Story.getAll()
      .then(stories => res.json(stories))
      .catch(done)
  })
}
