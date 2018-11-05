'use strict'

export default (reqInstance) => ({
  getAll () {
    return reqInstance.get('themes/all')
      .then(res => res.data)
  },
  getById(id) {
      return reqInstance.get('themes/byId', id)
        .then(res => res.data)
  },
  deleteTheme(id) {
      return reqInstance.get('themes/delete?id=' + id)
        .then(res => res.data)
  },
  create(payload) {
      return reqInstance.post('themes/create', payload)
        .then(res => res.data)
  }

})
