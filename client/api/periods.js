'use strict'

export default (reqInstance) => ({
  getAll () {
    return reqInstance.get('periods/all')
      .then(res => res.data)
  },
  getById(id) {
      return reqInstance.get('periods/byId', id)
        .then(res => res.data)
  },
  deletePeriod(id) {
      return reqInstance.get('periods/delete?id=' + id)
        .then(res => res.data)
  },
  create(payload) {
      return reqInstance.post('periods/create', payload)
        .then(res => res.data)
  }

})
