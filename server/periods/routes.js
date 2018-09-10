const controller = require('./controller')
const Period = controller()

module.exports = function (router) 
{
    router.get('/periods/byId', function (req, res, done) {
        Period.get(req.query.id)
            .then(period => res.json(period))
            .catch(done)
    })
}
