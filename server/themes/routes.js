const controller = require('./controller')
const Theme = controller()

module.exports = function (router) 
{
    router.get('/themes/byId', function (req, res, done) {
        Theme.get(req.query.id)
            .then(theme => res.json(theme))
            .catch(done)
    })
}
