'use strict'

export default (reqInstance) => ({
  getPeriodById (id) {
    return reqInstance.get(`periods/byId/${id}`)
      .then(res => res.data)
  },

  getAllPeriods () {
    return reqInstance.get('periods/all')
      .then(res => res.data)
  },

  updatePeriod (updateData) {
    return reqInstance.put('periods/update', updateData)
      .then(res => res.data)
  },

  addNewPeriod (periodData) {
    return reqInstance.put('periods/new', periodData)
      .then(res => res.data)
  },

  createPeriod (payload) {
    return reqInstance.post('periods/create', payload)
      .then(res => res.data)
  },

  deletePeriod (id) {
    return reqInstance.get(`periods/delete/${id}`)
      .then(res => res.data)
  }
})
