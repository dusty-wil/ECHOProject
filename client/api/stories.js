'use strict'

export default (reqInstance) => ({
  getStoryById (id) {
    // console.log(id)
    console.log('api function called')
    console.log('reqInstance')
    console.log(reqInstance)
    console.log(`stories/byId/${id}`)
    console.log(reqInstance.get(`stories/byId/${id}`))


    // return id

    return reqInstance.get(`stories/byId/${id}`)
      .then(res => res.data)
  }
})
