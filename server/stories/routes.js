const controller = require('./controller')
const Story = controller()
const Logger = require('../utils/logger').Logger
const log = Logger('app:echo:poo')
const { NotFoundError } = require('objection') 
const sgMail = require('@sendgrid/mail')

const CategoryBridgeController = require('../categoryBridge/controller')
const LocationBridgeController = require('../locationBridge/controller')
const NameBridgeController = require('../nameBridge/controller')
const PeriodBridgeController = require('../periodBridge/controller')
const SubjectBridgeController = require('../subjectBridge/controller')
const StoryAuthorController = require('../storyAuthors/controller')
const StoryAuthorBridgeController = require('../storyAuthorBridge/controller')

const CategoryController = require('../categories/controller')
const LocationController = require('../locations/controller')
const NameController = require('../names/controller')
const PeriodController = require('../periods/controller')
const SubjectController = require('../subjects/controller')

module.exports = function (router) {
  router.put('/stories/update', function (req, res, done) {
    Story.update(req.body)
      .then(() => CategoryBridgeController().deleteCategoryBridgeByStoryId(req.body.id))
      .then(() => LocationBridgeController().deleteLocationBridgeByStoryId(req.body.id))
      .then(() => NameBridgeController().deleteNameBridgeByStoryId(req.body.id))
      .then(() => PeriodBridgeController().deletePeriodBridgeByStoryId(req.body.id))
      .then(() => SubjectBridgeController().deleteSubjectBridgeByStoryId(req.body.id))
      .then(() => StoryAuthorBridgeController().deleteStoryAuthorBridgeByStoryId(req.body.id))
      .then(() => {
        for (var category of req.body.categories) {
          CategoryBridgeController().create({
            category_id: category,
            story_id: req.body.id
          })
        }
      })
      .then(() => {
        for (var location of req.body.locations) {
          LocationBridgeController().create({
            location_id: location,
            story_id: req.body.id
          })
        }
      })
      .then(() => {
        for (var name of req.body.names) {
          NameBridgeController().create({
            name_id: name,
            story_id: req.body.id
          })
        }
      })
      .then(() => {
        for (var period of req.body.periods) {
          PeriodBridgeController().create({
            period_id: period,
            story_id: req.body.id
          })
        }
      })
      .then(() => {
        for (var subject of req.body.subjects) {
          SubjectBridgeController().create({
            subject_id: subject,
            story_id: req.body.id
          })
        }
      })
      .then(async function () {
        for (var author of req.body.authors) {
          if (author.id && author.id != '') {
            await StoryAuthorController().update(author)
            .then(async function (author) {
              await StoryAuthorBridgeController().create({
                story_author_id: author.id,
                story_id: req.body.id
              })
            })
          } else {
            await StoryAuthorController().getByName(author.name)
            .then(async function (res) {
              if (res && typeof res.id != 'undefined') {
                await StoryAuthorController().update({ id: res.id, name: author.name })
                .then(async function (res) {
                  await StoryAuthorBridgeController().create({
                    story_author_id: res.id,
                    story_id: req.body.id
                  })
                })
              } else {
                await StoryAuthorController().create(author)
                .then(async function (res) {
                  await StoryAuthorBridgeController().create({
                    story_author_id: res.id,
                    story_id: req.body.id
                  })
                })
              }
            })
          }
        }
      })
      .then(() => Story.get(req.body.id))
      .then((story) => {
        res.json(story)
      })
      .catch(done)
  })

  router.post('/stories/new', function (req, res, done) {
    Story.new(req.body)
      .then((story) => {
        Promise.resolve()
          .then(() => {
            for (var category of req.body.categories) {
              CategoryBridgeController().create({
                category_id: category,
                story_id: story.id
              })
            }
          })
          .then(() => {
            for (var location of req.body.locations) {
              LocationBridgeController().create({
                location_id: location,
                story_id: story.id
              })
            }
          })
          .then(() => {
            for (var name of req.body.names) {
              NameBridgeController().create({
                name_id: name,
                story_id: story.id
              })
            }
          })
          .then(() => {
            for (var period of req.body.periods) {
              PeriodBridgeController().create({
                period_id: period,
                story_id: story.id
              })
            }
          })
          .then(() => {
            for (var subject of req.body.subjects) {
              SubjectBridgeController().create({
                subject_id: subject,
                story_id: story.id
              })
            }
          })
          .then(async function () {
            for (var author of req.body.authors) {
              if (author.id && author.id != '') {
                await StoryAuthorController().update(author)
                .then(async function (author) {
                  await StoryAuthorBridgeController().create({
                    story_author_id: author.id,
                    story_id: story.id
                  })
                })
              } else {
                await StoryAuthorController().getByName(author.name)
                .then(async function (res) {
                  if (res && typeof res.id != 'undefined') {
                    await StoryAuthorController().update({ id: res.id, name: author.name })
                    .then(async function (res) {
                      await StoryAuthorBridgeController().create({
                        story_author_id: res.id,
                        story_id: story.id
                      })
                    })
                  } else {
                    await StoryAuthorController().create(author)
                    .then(async function (res) {
                      await StoryAuthorBridgeController().create({
                        story_author_id: res.id,
                        story_id: story.id
                      })
                    })
                  }
                })
              }
            }
          })
          .then(() => Story.get(story.id))
          .then((story) => res.json(story))
      })
      .catch(done)
  })

  router.post('/stories/create', function (req, res, done) {
    Story.create(req.body)
      .then((story) => {
        Promise.resolve()
          .then(() => {
            for (var category of req.body.categories) {
              CategoryBridgeController().create({
                category_id: category,
                story_id: story.id
              })
            }
          })
          .then(() => {
            for (var location of req.body.locations) {
              LocationBridgeController().create({
                location_id: location,
                story_id: story.id
              })
            }
          })
          .then(() => {
            for (var name of req.body.names) {
              NameBridgeController().create({
                name_id: name,
                story_id: story.id
              })
            }
          })
          .then(() => {
            for (var period of req.body.periods) {
              PeriodBridgeController().create({
                period_id: period,
                story_id: story.id
              })
            }
          })
          .then(() => {
            for (var subject of req.body.subjects) {
              SubjectBridgeController().create({
                subject_id: subject,
                story_id: story.id
              })
            }
          })
          .then(async function () {
            for (var author of req.body.authors) {
              if (author.id && author.id != '') {
                await StoryAuthorController().update(author)
                .then(async function (author) {
                  await StoryAuthorBridgeController().create({
                    story_author_id: author.id,
                    story_id: story.id
                  })
                })
              } else {
                await StoryAuthorController().getByName(author.name)
                .then(async function (res) {
                  if (res && typeof res.id != 'undefined') {
                    await StoryAuthorController().update({ id: res.id, name: author.name })
                    .then(async function (res) {
                      await StoryAuthorBridgeController().create({
                        story_author_id: res.id,
                        story_id: story.id
                      })
                    })
                  } else {
                    await StoryAuthorController().create(author)
                    .then(async function (res) {
                      await StoryAuthorBridgeController().create({
                        story_author_id: res.id,
                        story_id: story.id
                      })
                    })
                  }
                })
              }
            }
          })
          .then(() => Story.get(story.id))
          .then((story) => res.json(story))
      })
      .catch(done)
  })

  router.get('/stories/delete/:id', function (req, res, done) {
    Story.get(req.params.id)
      .then((story) => res.json(story))
      .then(() => CategoryBridgeController().deleteCategoryBridgeByStoryId(req.params.id))
      .then(() => LocationBridgeController().deleteLocationBridgeByStoryId(req.params.id))
      .then(() => NameBridgeController().deleteNameBridgeByStoryId(req.params.id))
      .then(() => PeriodBridgeController().deletePeriodBridgeByStoryId(req.params.id))
      .then(() => SubjectBridgeController().deleteSubjectBridgeByStoryId(req.params.id))
      .then(() => StoryAuthorBridgeController().deleteStoryAuthorBridgeByStoryId(req.params.id))
      .then(() => Story.delete(req.params.id))
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

                  StoryAuthorController().getByStoryId(story.id)
                  .then(function (storyAuthors) {
                    story.authors = []
                    for (var storyAuthor of storyAuthors) {
                      story.authors.push({
                        id: storyAuthor.id,
                        name: storyAuthor.name
                      })
                    }
                    res.json(story)
                  })
                })
              })
            })
          })
        })
      })
      .catch(done)
  })

  router.get('/stories/adminById/:id', function (req, res, done) {
    Story.adminGet(req.params.id)
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

                  StoryAuthorController().getByStoryId(story.id)
                  .then(function (storyAuthors) {
                    story.authors = []
                    for (var storyAuthor of storyAuthors) {
                      story.authors.push({
                        id: storyAuthor.id,
                        name: storyAuthor.name
                      })
                    }
                    res.json(story)
                  })
                })
              })
            })
          })
        })
      })
      .catch(function (e) { 
        if (e instanceof NotFoundError) { 
          res.json(null)
        }
      })
      .catch(done)
  })

  router.get('/stories/search/byCategoryId/:id', function (req, res, done) {
    storiesOut = []
    Story.getByCategoryId(req.params.id)
      .then(async function (stories) {
        for (var story of stories) {
          await StoryAuthorController().getByStoryId(story.id)
            .then(function (storyAuthors) {
              story.authors = []
              for (var storyAuthor of storyAuthors) {
                story.authors.push({
                  id: storyAuthor.id,
                  name: storyAuthor.name
                })
              }
            })
            .then(() => {
              storiesOut.push(story)
            })
        }
      })
      .then(() => {
        res.json(storiesOut)
      })
      .catch(done)
  })

  router.get('/stories/search/byLocationId/:id', function (req, res, done) {
    storiesOut = []
    Story.getByLocationId(req.params.id)
      .then(async function (stories) {
        for (var story of stories) {
          await StoryAuthorController().getByStoryId(story.id)
            .then(function (storyAuthors) {
              story.authors = []
              for (var storyAuthor of storyAuthors) {
                story.authors.push({
                  id: storyAuthor.id,
                  name: storyAuthor.name
                })
              }
            })
            .then(() => {
              storiesOut.push(story)
            })
        }
      })
      .then(() => {
        res.json(storiesOut)
      })
      .catch(done)
  })

  router.get('/stories/search/byNameId/:id', function (req, res, done) {
    storiesOut = []
    Story.getByNameId(req.params.id)
      .then(async function (stories) {
        for (var story of stories) {
          await StoryAuthorController().getByStoryId(story.id)
            .then(function (storyAuthors) {
              story.authors = []
              for (var storyAuthor of storyAuthors) {
                story.authors.push({
                  id: storyAuthor.id,
                  name: storyAuthor.name
                })
              }
            })
            .then(() => {
              storiesOut.push(story)
            })
        }
      })
      .then(() => {
        res.json(storiesOut)
      })
      .catch(done)
  })

  router.get('/stories/search/byPeriodId/:id', function (req, res, done) {
    storiesOut = []
    Story.getByPeriodId(req.params.id)
      .then(async function (stories) {
        for (var story of stories) {
          await StoryAuthorController().getByStoryId(story.id)
            .then(function (storyAuthors) {
              story.authors = []
              for (var storyAuthor of storyAuthors) {
                story.authors.push({
                  id: storyAuthor.id,
                  name: storyAuthor.name
                })
              }
            })
            .then(() => {
              storiesOut.push(story)
            })
        }
      })
      .then(() => {
        res.json(storiesOut)
      })
      .catch(done)
  })

  router.get('/stories/search/byAuthorId/:id', function (req, res, done) {
    storiesOut = []
    Story.getByAuthorId(req.params.id)
      .then(async function (stories) {
        for (var story of stories) {
          await StoryAuthorController().getByStoryId(story.id)
            .then(function (storyAuthors) {
              story.authors = []
              for (var storyAuthor of storyAuthors) {
                story.authors.push({
                  id: storyAuthor.id,
                  name: storyAuthor.name
                })
              }
            })
            .then(() => {
              storiesOut.push(story)
            })
        }
      })
      .then(() => {
        res.json(storiesOut)
      })
      .catch(done)
  })

  router.get('/stories/search/bySubjectId/:id', function (req, res, done) {
    storiesOut = []
    Story.getBySubjectId(req.params.id)
      .then(async function (stories) {
        for (var story of stories) {
          await StoryAuthorController().getByStoryId(story.id)
            .then(function (storyAuthors) {
              story.authors = []
              for (var storyAuthor of storyAuthors) {
                story.authors.push({
                  id: storyAuthor.id,
                  name: storyAuthor.name
                })
              }
            })
            .then(() => {
              storiesOut.push(story)
            })
        }
      })
      .then(() => {
        res.json(storiesOut)
      })
      .catch(done)
  })

  router.get('/stories/search/byCategory/matching/:val', function (req, res, done) {
    storiesOut = []
    Story.getByCategoryVal(req.params.val)
      .then(async function (stories) {
        for (var story of stories) {
          await StoryAuthorController().getByStoryId(story.id)
            .then(function (storyAuthors) {
              story.authors = []
              for (var storyAuthor of storyAuthors) {
                story.authors.push({
                  id: storyAuthor.id,
                  name: storyAuthor.name
                })
              }
            })
            .then(() => {
              storiesOut.push(story)
            })
        }
      })
      .then(() => {
        res.json(storiesOut)
      })
      .catch(done)
  })

  router.get('/stories/search/byLocation/matching/:val', function (req, res, done) {
    storiesOut = []
    Story.getByLocationVal(req.params.val)
      .then(async function (stories) {
        for (var story of stories) {
          await StoryAuthorController().getByStoryId(story.id)
            .then(function (storyAuthors) {
              story.authors = []
              for (var storyAuthor of storyAuthors) {
                story.authors.push({
                  id: storyAuthor.id,
                  name: storyAuthor.name
                })
              }
            })
            .then(() => {
              storiesOut.push(story)
            })
        }
      })
      .then(() => {
        res.json(storiesOut)
      })
      .catch(done)
  })

  router.get('/stories/search/byName/matching/:val', function (req, res, done) {
    storiesOut = []
    Story.getByNameVal(req.params.val)
      .then(async function (stories) {
        for (var story of stories) {
          await StoryAuthorController().getByStoryId(story.id)
            .then(function (storyAuthors) {
              story.authors = []
              for (var storyAuthor of storyAuthors) {
                story.authors.push({
                  id: storyAuthor.id,
                  name: storyAuthor.name
                })
              }
            })
            .then(() => {
              storiesOut.push(story)
            })
        }
      })
      .then(() => {
        res.json(storiesOut)
      })
      .catch(done)
  })

  router.get('/stories/search/byPeriod/matching/:val', function (req, res, done) {
    storiesOut = []
    Story.getByPeriodVal(req.params.val)
      .then(async function (stories) {
        for (var story of stories) {
          await StoryAuthorController().getByStoryId(story.id)
            .then(function (storyAuthors) {
              story.authors = []
              for (var storyAuthor of storyAuthors) {
                story.authors.push({
                  id: storyAuthor.id,
                  name: storyAuthor.name
                })
              }
            })
            .then(() => {
              storiesOut.push(story)
            })
        }
      })
      .then(() => {
        res.json(storiesOut)
      })
      .catch(done)
  })

  router.get('/stories/search/byAuthor/matching/:val', function (req, res, done) {
    storiesOut = []
    Story.getByAuthorVal(req.params.val)
      .then(async function (stories) {
        for (var story of stories) {
          await StoryAuthorController().getByStoryId(story.id)
            .then(function (storyAuthors) {
              story.authors = []
              for (var storyAuthor of storyAuthors) {
                story.authors.push({
                  id: storyAuthor.id,
                  name: storyAuthor.name
                })
              }
            })
            .then(() => {
              storiesOut.push(story)
            })
        }
      })
      .then(() => {
        res.json(storiesOut)
      })
      .catch(done)
  })

  router.get('/stories/search/bySubject/matching/:val', function (req, res, done) {
    storiesOut = []
    Story.getBySubjectVal(req.params.val)
      .then(async function (stories) {
        for (var story of stories) {
          await StoryAuthorController().getByStoryId(story.id)
            .then(function (storyAuthors) {
              story.authors = []
              for (var storyAuthor of storyAuthors) {
                story.authors.push({
                  id: storyAuthor.id,
                  name: storyAuthor.name
                })
              }
            })
            .then(() => {
              storiesOut.push(story)
            })
        }
      })
      .then(() => {
        res.json(storiesOut)
      })
      .catch(done)
  })

  router.get('/stories/search/byTitle/matching/:val', function (req, res, done) {
    storiesOut = []
    Story.getByTitleVal(req.params.val)
      .then(async function (stories) {
        for (var story of stories) {
          await StoryAuthorController().getByStoryId(story.id)
            .then(function (storyAuthors) {
              story.authors = []
              for (var storyAuthor of storyAuthors) {
                story.authors.push({
                  id: storyAuthor.id,
                  name: storyAuthor.name
                })
              }
            })
            .then(() => {
              storiesOut.push(story)
            })
        }
      })
      .then(() => {
        res.json(storiesOut)
      })
      .catch(done)
  })

  router.get('/stories/randomFeatured', function (req, res, done) {
    Story.getRandomFeatured()
      .then(function (story) {
        // hoooooooooly crap is there a better way to do this???
        CategoryController().getByStoryId(story.id)
        .then(function (categories) {
          story.categories = []
          for (var category of categories) {
            story.categories.push({ id: category.id, name: category.name })
          }

          PeriodController().getByStoryId(story.id)
          .then(function (periods) {
            story.periods = []
            for (var period of periods) {
              story.periods.push({ id: period.id, name: period.name })
            }

            SubjectController().getByStoryId(story.id)
            .then(function (subjects) {
              story.subjects = []
              for (var subject of subjects) {
                story.subjects.push({ id: subject.id, name: subject.name })
              }

              LocationController().getByStoryId(story.id)
              .then(function (locations) {
                story.locations = []
                for (var location of locations) {
                  story.locations.push({ id: location.id, name: location.name })
                }

                NameController().getByStoryId(story.id)
                .then(function (names) {
                  story.names = []
                  for (var name of names) {
                    story.names.push({ id: name.id, name: name.name })
                  }

                  StoryAuthorController().getByStoryId(story.id)
                  .then(function (storyAuthors) {
                    story.authors = []
                    for (var storyAuthor of storyAuthors) {
                      story.authors.push({ id: storyAuthor.id, name: storyAuthor.name })
                    }
                    res.json(story)
                  })
                })
              })
            })
          })
        })
      })
      .catch(function (e) { 
        if (e instanceof NotFoundError) { 
          res.json(null)
        } else { 
          throw e
        }
      })
      .catch(done)
  })

  router.get('/stories/getSearchResultById/:id', function (req, res, done) {
    Story.get(req.params.id)
      .then(function (story) {
        CategoryController().getByStoryId(story.id)
        .then(function (categories) {
          story.categories = []
          for (var category of categories) {
            story.categories.push({ id: category.id, name: category.name })
          }

          PeriodController().getByStoryId(story.id)
          .then(function (periods) {
            story.periods = []
            for (var period of periods) {
              story.periods.push({ id: period.id, name: period.name })
            }

            SubjectController().getByStoryId(story.id)
            .then(function (subjects) {
              story.subjects = []
              for (var subject of subjects) {
                story.subjects.push({ id: subject.id, name: subject.name })
              }

              LocationController().getByStoryId(story.id)
              .then(function (locations) {
                story.locations = []
                for (var location of locations) {
                  story.locations.push({ id: location.id, name: location.name })
                }

                NameController().getByStoryId(story.id)
                .then(function (names) {
                  story.names = []
                  for (var name of names) {
                    story.names.push({ id: name.id, name: name.name })
                  }

                  StoryAuthorController().getByStoryId(story.id)
                  .then(function (storyAuthors) {
                    story.authors = []
                    for (var storyAuthor of storyAuthors) {
                      story.authors.push({ id: storyAuthor.id, name: storyAuthor.name })
                    }
                    res.json(story)
                  })
                })
              })
            })
          })
        })
      })
      .catch(function (e) { 
        if (e instanceof NotFoundError) { 
          res.json(null)
        } else { 
          throw e
        }
      })
      .catch(done)
  })

  router.get('/stories/all', function (req, res, done) {
    Story.getAll()
      .then((stories) => res.json(stories))
      .catch(done)
  })
}
