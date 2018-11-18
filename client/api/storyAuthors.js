'use strict'

export default (reqInstance) => ({
  getAuthorById (id) {
    return reqInstance.get(`storyAuthors/byId/${id}`)
      .then(res => res.data)
  },

  updateAuthor (updateData) {
    return reqInstance.put('storyAuthors/update', updateData)
      .then(res => res.data)
  },

  addNewAuthor (authorData) {
    return reqInstance.put('storyAuthors/new', authorData)
      .then(res => res.data)
  },

  createAuthor (payload) {
    return reqInstance.post('storyAuthors/create', payload)
      .then(res => res.data)
  },

  deleteAuthor (id) {
    return reqInstance.get(`storyAuthors/delete/${id}`)
      .then(res => res.data)
  }
})
