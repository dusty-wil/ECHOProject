'use strict'

export default (reqInstance) => ({
  getSubjectById (id) {
    // console.log(id)
    return reqInstance.get(`subjects/byId/${id}`)
      .then(res => res.data)
  },

  updateSubject (updateData) {
    return reqInstance.put('subjects/update', updateData)
        .then(res => res.data)
  }
})
