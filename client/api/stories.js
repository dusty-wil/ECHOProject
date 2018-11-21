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

  getRandomFeaturedStory () {
    return reqInstance.get('stories/randomFeatured')
      .then(res => res.data)
  },

  getSearchResultById (id) {
    return reqInstance.get(`stories/getSearchResultById/${id}`)
      .then(res => res.data)
  },

  getByCategoryId (id) {
    return reqInstance.get(`stories/search/byCategoryId/${id}`)
      .then(res => res.data)
  },

  getByLocationId (id) {
    return reqInstance.get(`stories/search/byLocationId/${id}`)
      .then(res => res.data)
  },

  getByNameId (id) {
    return reqInstance.get(`stories/search/byNameId/${id}`)
      .then(res => res.data)
  },

  getByPeriodId (id) {
    return reqInstance.get(`stories/search/byPeriodId/${id}`)
      .then(res => res.data)
  },

  getByAuthorId (id) {
    return reqInstance.get(`stories/search/byAuthorId/${id}`)
      .then(res => res.data)
  },

  getBySubjectId (id) {
    return reqInstance.get(`stories/search/bySubjectId/${id}`)
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
