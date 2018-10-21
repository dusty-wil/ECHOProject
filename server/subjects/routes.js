const controller = require('./controller')
const Subject = controller()

module.exports = function (router) 
{
    router.get('/subjects/byId', function (req, res, done) {
        Subject.get(req.query.id)
            .then(subjects => res.json(subjects))
            .catch(done)
    })
}
