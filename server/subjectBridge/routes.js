const controller = require('./controller')
const SubjectBridge = controller()

module.exports = function (router)
{
    router.get('/subjectBridge/bySubjectId', function (req, res, done) {
        SubjectBridge.getBySubjectId(req.query.id)
            .then(subject => res.json(subject))
            .catch(done)
    }),
    router.get('/subjectBridge/byStoryId', function (req, res, done) {
        SubjectBridge.getByStoryId(req.query.id)
            .then(subject => res.json(subject))
            .catch(done)
    }),
    router.get('/subjectBridge/all', function (req, res, done) {
        SubjectBridge.getAll()
            .then(subject => res.json(subject))
            .catch(done)
    }),
    router.get('/subjectBridge/deleteBySubjectId', function(req,res,done) {
        SubjectBridge.deleteSubjectBridgeBySubjectId(req.query.id)
            .then(function(){})
            .catch(done)
    })
}
