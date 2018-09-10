const controller = require('./controller')
const Story = controller()

module.exports = function (router) 
{
    router.get('/stories/byId', function (req, res, done) {
        Story.get(req.query.id)
            .then(story => res.json(story))
            .catch(done)
    })
}
