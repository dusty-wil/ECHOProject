const moment = require('moment')
const { transaction } = require('objection')
const { StoryAuthorBridge } = require('./model')

module.exports = function () {
  return {
    create: async (payload) => {
      return StoryAuthorBridge.query()
        .insert({
          story_author_id: payload.story_author_id,
          story_id: payload.story_id
        })
    },

    getByStoryAuthorId: async (id) => {
      return StoryAuthorBridge.query()
        .where({ storyAuthor_id: id })
        .select(StoryAuthorBridge.publicColumns)
        .first()
    },

    getByStoryId: async (id) => {
      return StoryAuthorBridge.query()
        .where({ story_id: id })
        .select(StoryAuthorBridge.publicColumns)
        .first()
    },

    deleteStoryAuthorBridgeByStoryAuthorId: async (id) => {
      return StoryAuthorBridge.query()
        .where({ storyAuthor_id: id })
        .delete()
    },

    deleteStoryAuthorBridgeByStoryId: async (id) => {
      return StoryAuthorBridge.query()
        .where({ story_id: id })
        .delete()
    }
  }
}
