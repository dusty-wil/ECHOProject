'use strict'

export default (reqInstance) => ({
  getAll () {
    return reqInstance.get('subjects/all')
      .then(res => res.data)
  },
  getById(id) {
      return reqInstance.get('subjects/byId', id)
        .then(res => res.data)
  },
  deleteSubject(id) {
      return reqInstance.get('subjects/delete?id=' + id)
        .then(res => res.data)
  },
  create(payload) {
      return reqInstance.post('subjects/create', payload)
        .then(res => res.data)
  }

})
