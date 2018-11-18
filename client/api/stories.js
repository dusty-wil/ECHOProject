'use strict'

export default (reqInstance) => ({
  getStoryById (id) {
    return reqInstance.get(`stories/byId/${id}`)
      .then(res => res.data)
  },

  getAllStories () {
    return reqInstance.get('stories/all')
      .then(res => res.data)
  },

  updateStory (updateData) {
    return reqInstance.put('stories/update', updateData)
      .then(res => res.data)
  },

  addNewStory (storyData) {
    return reqInstance.post('stories/new', storyData)
      .then(res => res.data)
  },

  createStory (payload) {
    return reqInstance.post('stories/create', payload)
      .then(res => res.data)
  },

  deleteStory (id) {
    return reqInstance.get(`stories/delete/${id}`)
      .then(res => res.data)
  }
})
