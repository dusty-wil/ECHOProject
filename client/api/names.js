'use strict'

export default (reqInstance) => ({
  getNameById (id) {
    return reqInstance.get(`names/byId/${id}`)
      .then(res => res.data)
  },

  getAllNames () {
    return reqInstance.get('names/all')
      .then(res => res.data)
  },

  updateName (updateData) {
    return reqInstance.put('names/update', updateData)
      .then(res => res.data)
  },

  addNewName (nameData) {
    return reqInstance.put('names/new', nameData)
      .then(res => res.data)
  },

  createName (payload) {
    return reqInstance.post('names/create', payload)
      .then(res => res.data)
  },

  deleteName (id) {
    return reqInstance.get(`names/delete/${id}`)
      .then(res => res.data)
  }
})
