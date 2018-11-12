const controller = require('./controller')
const Subject = controller()
const SubjectBridgeController = require('../subjectBridge/controller')

module.exports = function (router) {
  router.put('/subjects/update', function (req, res, done) {
    Subject.update(req.body)
      .then(function (subject) {
        res.json(subject)
      }).catch(done)
  })

  router.post('/subjects/new', function (req, res, done) {
    Subject.new(req.body)
      .then(function (subject) {
        res.json(subject)
      }).catch(done)
  })

  router.get('/subjects/delete/:id', function (req, res, done) {
    SubjectBridgeController().deleteSubjectBridgeBySubjectId(req.params.id)
      .then(function () {
        // return the deleted record
        Subject.get(req.params.id)
          .then(function (subject) {
            res.json(subject)
            // then actually delete it
            Subject.delete(req.params.id)
          })
      })
      .catch(done)
  })

  router.get('/subjects/byId/:id', function (req, res, done) {
    Subject.get(req.params.id)
      .then(subject => res.json(subject))
      .catch(done)
  })

  router.get('/subjects/all', function (req, res, done) {
    Subject.getAll()
      .then(subjects => res.json(subjects))
      .catch(done)
  })

  router.post('/subjects/create', function (req, res, done) {
    Subject.create(req.body)
      .then(function (subject) {
        res.json(subject)
        // Subject.getAll()
        //   .then(subject => res.json(subject))
    }).catch(done)
  })
}
