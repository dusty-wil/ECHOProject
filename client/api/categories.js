'use strict'

export default (reqInstance) => ({
  getAll () {
    return reqInstance.get('categories/all')
      .then(res => res.data)
  },
  getById(id) {
      return reqInstance.get('categories/byId', id)
        .then(res => res.data)
  },
  deleteCategory(id) {
      return reqInstance.get('categories/delete?id=' + id)
        .then(res => res.data)
  },
  create(payload) {
      return reqInstance.post('categories/create', payload)
        .then(res => res.data)
  }

})
