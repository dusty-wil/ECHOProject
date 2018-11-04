'use strict'

export default (reqInstance) => ({
  getNameById (id) {
    return reqInstance.get(`names/byId/${id}`)
      .then(res => res.data)
  },

  updateName (updateData) {
    return reqInstance.put('names/update', updateData)
        .then(res => res.data)
  }
})
