const controller = require('./controller')
const Author = controller()

module.exports = function (router) 
{
    router.get('/authors/byId', function (req, res, done) {
        Author.get(req.query.id)
            .then(author => res.json(author))
            .catch(done)
    })
}
