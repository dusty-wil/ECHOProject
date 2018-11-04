const controller = require('./controller')
const Category = controller()
const CategoryBridgeController = require('../categoryBridge/controller')
module.exports = function (router)
{
    router.get('/categories/byId', function (req, res, done) {
        Category.get(req.query.id)
            .then(category => res.json(category))
            .catch(done)
    })
    router.get('/categories/all', function (req, res, done) {
        Category.getAll()
            .then(category => res.json(category))
            .catch(done)
    }),
    router.get('/categories/delete', function(req,res,done) {
        CategoryBridgeController().deleteCategoryBridgeByCategoryId(req.query.id)
        .then(function(){
            Category.deleteCategory(req.query.id)
                .then(function(){
                    Category.getAll()
                        .then(category => res.json(category))
                })
        })
            .catch(done)
    }),
    router.post('/categories/create', function(req,res,done) {
        Category.create(req.body).then(function(){
            Category.getAll()
                .then(category => res.json(category))
        }).catch(done)
    })
}
