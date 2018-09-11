const controller = require('./controller')
const Category = controller()

module.exports = function (router) 
{
    router.get('/categories/byId', function (req, res, done) {
        Category.get(req.query.id)
            .then(category => res.json(category))
            .catch(done)
    })
}
