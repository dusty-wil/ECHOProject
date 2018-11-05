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
    return reqInstance.put('stories/new', storyData)
      .then(res => res.data)
  },
  deleteStory (storyData) {
    return reqInstance.put('stories/delete', storyData)
      .then(res => res.data)
  }
})
