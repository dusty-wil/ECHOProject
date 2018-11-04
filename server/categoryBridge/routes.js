const controller = require('./controller')
const CategoryBridge = controller()

module.exports = function (router)
{
    router.get('/categoryBridge/byCategoryId', function (req, res, done) {
        CategoryBridge.getByCategoryId(req.query.id)
            .then(category => res.json(category))
            .catch(done)
    }),
    router.get('/categoryBridge/byStoryId', function (req, res, done) {
        CategoryBridge.getByStoryId(req.query.id)
            .then(category => res.json(category))
            .catch(done)
    }),
    router.get('/categoryBridge/all', function (req, res, done) {
        CategoryBridge.getAll()
            .then(category => res.json(category))
            .catch(done)
    }),
    router.get('/categoryBridge/delete', function(req,res,done) {
        CategoryBridge.deleteCategoryBridge(req.query.id)
            .then(function(){})
            .catch(done)
    })
}
