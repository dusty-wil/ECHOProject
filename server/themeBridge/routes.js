const controller = require('./controller')
const ThemeBridge = controller()

module.exports = function (router)
{
    router.get('/subjectBridge/bySubjectId', function (req, res, done) {
        ThemeBridge.getBySubjectId(req.query.id)
            .then(subject => res.json(subject))
            .catch(done)
    }),
    router.get('/subjectBridge/byStoryId', function (req, res, done) {
        ThemeBridge.getByStoryId(req.query.id)
            .then(subject => res.json(subject))
            .catch(done)
    }),
    router.get('/subjectBridge/all', function (req, res, done) {
        ThemeBridge.getAll()
            .then(subject => res.json(subject))
            .catch(done)
    }),
    router.get('/subjectBridge/deleteByThemeId', function(req,res,done) {
        ThemeBridge.deleteThemeBridge(req.query.id)
            .then(function(){})
            .catch(done)
    })
}
