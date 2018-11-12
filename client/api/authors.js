'use strict'

export default (reqInstance) => ({
  getAuthorById (id) {
    return reqInstance.get(`authors/byId/${id}`)
      .then(res => res.data)
  },

  getAllAuthors () {
    return reqInstance.get('authors/all')
      .then(res => res.data)
  },

  updateAuthor (updateData) {
    return reqInstance.put('authors/update', updateData)
      .then(res => res.data)
  },

  addNewAuthor (authorData) {
    return reqInstance.put('authors/new', authorData)
      .then(res => res.data)
  },

  createAuthor (payload) {
    return reqInstance.post('authors/create', payload)
      .then(res => res.data)
  },

  deleteAuthor (id) {
    return reqInstance.get(`authors/delete/${id}`)
      .then(res => res.data)
  }
})
