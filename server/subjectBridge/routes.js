const controller = require('./controller')
const SubjectBridge = controller()

module.exports = function (router) {
  router.get('/subjectBridge/bySubjectId/:id', function (req, res, done) {
    SubjectBridge.getBySubjectId(req.params.id)
      .then(subject => res.json(subject))
      .catch(done)
  }),

  router.get('/subjectBridge/byStoryId/:id', function (req, res, done) {
    SubjectBridge.getByStoryId(req.params.id)
      .then(subject => res.json(subject))
      .catch(done)
  }),

  router.get('/subjectBridge/deleteBySubjectId/:id', function (req, res, done) {
    SubjectBridge.deleteSubjectBridgeBySubjectId(req.params.id)
      .then(function () {})
      .catch(done)
  }),

  router.get('/subjectBridge/deleteByStoryId/:id', function (req, res, done) {
    SubjectBridge.deleteSubjectBridgeByStoryId(req.params.id)
      .then(function () {})
      .catch(done)
  }),

  router.post('/subjectBridge/new', function (req, res, done) {
    SubjectBridge.create(req.body)
      .then(function (subjectBridge) {
        res.json(subjectBridge)
      }).catch(done)
  })
}
