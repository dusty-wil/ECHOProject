const moment = require('moment')
const { transaction } = require('objection')
const { CategoryBridge } = require('./model')

module.exports = function ()
{
    return {
        getByCategoryId: async (id) => {
            return CategoryBridge.query()
                .where({ category_id: id })
                .select(CategoryBridge.publicColumns)
                .first()
                
        },
        getByStoryId: async (id) => {
            return CategoryBridge.query()
                .where({ story_id: id })
                .select(CategoryBridge.publicColumns)
                .first()
                
        },
        getAll: async () => {
            return CategoryBridge.query()
                .select(CategoryBridge.publicColumns)
        },
        deleteCategoryBridgeByCategoryId: async(id) => {
            return CategoryBridge.query()
                .where({ category_id: id })
                .delete()
                
        },
        deleteCategoryBridgeByStoryId: async(id) => {
            return CategoryBridge.query()
                .where({ story_id: id })
                .delete()
                
        }
    }
}
