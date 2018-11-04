'use strict'

export default (reqInstance) => ({
  getStoryById (id) {
    return reqInstance.get(`stories/byId/${id}`)
      .then(res => res.data)
  }
})
