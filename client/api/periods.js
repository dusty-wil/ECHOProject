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
  deletePeriod (periodData) {
    return reqInstance.put('periods/delete', periodData)
      .then(res => res.data)
  }
})
