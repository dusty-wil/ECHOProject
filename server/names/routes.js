const controller = require('./controller')
const Name = controller()

module.exports = function (router) 
{
    router.get('/names/byId', function (req, res, done) {
        Name.get(req.query.id)
            .then(name => res.json(name))
            .catch(done)
    })
}
