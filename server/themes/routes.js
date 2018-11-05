const controller = require('./controller')
const Theme = controller()
const ThemeBridgeController = require('../themeBridge/controller')
module.exports = function (router)
{
    router.get('/themes/byId', function (req, res, done) {
        Theme.get(req.query.id)
            .then(subject => res.json(subject))
            .catch(done)
    })
    router.get('/themes/all', function (req, res, done) {
        Theme.getAll()
            .then(subject => res.json(subject))
            .catch(done)
    }),
    router.get('/themes/delete', function(req,res,done) {
        ThemeBridgeController().deleteThemeBridgeByThemeId(req.query.id)
        .then(function(){
            Theme.deleteTheme(req.query.id)
                .then(function(){
                    Theme.getAll()
                        .then(subject => res.json(subject))
                })
        })
            .catch(done)
    }),
    router.post('/themes/create', function(req,res,done) {
        Theme.create(req.body).then(function(){
            Theme.getAll()
                .then(subject => res.json(subject))
        }).catch(done)
    })
}
