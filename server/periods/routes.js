const controller = require('./controller')
const Period = controller()
const PeriodBridgeController = require('../periodBridge/controller')
module.exports = function (router)
{
    router.get('/periods/byId', function (req, res, done) {
        Period.get(req.query.id)
            .then(period => res.json(period))
            .catch(done)
    })
    router.get('/periods/all', function (req, res, done) {
        Period.getAll()
            .then(period => res.json(period))
            .catch(done)
    }),
    router.get('/periods/delete', function(req,res,done) {
        PeriodBridgeController().deletePeriodBridgeByPeriodId(req.query.id)
        .then(function(){
            Period.deletePeriod(req.query.id)
                .then(function(){
                    Period.getAll()
                        .then(period => res.json(period))
                })
        })
            .catch(done)
    }),
    router.post('/periods/create', function(req,res,done) {
        Period.create(req.body).then(function(){
            Period.getAll()
                .then(period => res.json(period))
        }).catch(done)
    })
}
