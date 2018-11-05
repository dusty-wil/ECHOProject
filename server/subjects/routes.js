const controller = require('./controller')
const Subject = controller()
const SubjectBridgeController = require('../subjectBridge/controller')
module.exports = function (router)
{
    router.get('/subjects/byId', function (req, res, done) {
        Subject.get(req.query.id)
            .then(subject => res.json(subject))
            .catch(done)
    })
    router.get('/subjects/all', function (req, res, done) {
        Subject.getAll()
            .then(subject => res.json(subject))
            .catch(done)
    }),
    router.get('/subjects/delete', function(req,res,done) {
        SubjectBridgeController().deleteSubjectBridgeBySubjectId(req.query.id)
        .then(function(){
            Subject.deleteSubject(req.query.id)
                .then(function(){
                    Subject.getAll()
                        .then(subject => res.json(subject))
                })
        })
            .catch(done)
    }),
    router.post('/subjects/create', function(req,res,done) {
        Subject.create(req.body).then(function(){
            Subject.getAll()
                .then(subject => res.json(subject))
        }).catch(done)
    })
}
