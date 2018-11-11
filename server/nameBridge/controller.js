const moment = require('moment')
const { transaction } = require('objection')
const { ThemeBridge } = require('./model')

module.exports = function ()
{
    return {
        getByThemeId: async (id) => {
            return ThemeBridge.query()
                .where({ theme_id: id })
                .select(ThemeBridge.publicColumns)
                .first()

        },
        getByStoryId: async (id) => {
            return ThemeBridge.query()
                .where({ story_id: id })
                .select(ThemeBridge.publicColumns)
                .first()

        },
        getAll: async () => {
            return ThemeBridge.query()
                .select(ThemeBridge.publicColumns)
        },
        deleteThemeBridgeByThemeId: async(id) => {
            return ThemeBridge.query()
                .where({ theme_id: id })
                .delete()

        },
        deleteThemeBridgeByStoryId: async(id) => {
            return ThemeBridge.query()
                .where({ story_id: id })
                .delete()

        }
    }
}
