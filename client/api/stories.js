'use strict'

export default (reqInstance) => ({
  getStoryById (id) {
    // console.log(id)
    console.log('api function called')
    console.log('reqInstance')
    console.log(reqInstance)
    console.log(`stories/byId/${id}`)
    console.log(reqInstance.get(`stories/byId/${id}`))
    return reqInstance.get(`stories/byId/${id}`)
      .then(res => res.data)
  },

  updateStory (updateData) {
    console.log(updateData)
    console.log('api function called')
    console.log('reqInstance')
    console.log(reqInstance)
    console.log('reqInstance.put(stories/update)')
    return reqInstance.put('stories/update', updateData)
        .then(res => res.data)
  }
})
