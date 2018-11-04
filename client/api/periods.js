'use strict'

export default (reqInstance) => ({
  getPeriodById (id) {
    return reqInstance.get(`periods/byId/${id}`)
      .then(res => res.data)
  },

  updatePeriod (updateData) {
    return reqInstance.put('periods/update', updateData)
        .then(res => res.data)
  }
})
