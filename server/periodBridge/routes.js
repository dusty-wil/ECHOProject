const controller = require('./controller')
const PeriodBridge = controller()

module.exports = function (router)
{
    router.get('/periodBridge/byPeriodId', function (req, res, done) {
        PeriodBridge.getByPeriodId(req.query.id)
            .then(period => res.json(period))
            .catch(done)
    }),
    router.get('/periodBridge/byStoryId', function (req, res, done) {
        PeriodBridge.getByStoryId(req.query.id)
            .then(period => res.json(period))
            .catch(done)
    }),
    router.get('/periodBridge/all', function (req, res, done) {
        PeriodBridge.getAll()
            .then(period => res.json(period))
            .catch(done)
    }),
    router.get('/periodBridge/deleteByPeriodId', function(req,res,done) {
        PeriodBridge.deletePeriodBridgeByPeriodId(req.query.id)
            .then(function(){})
            .catch(done)
    })
}
