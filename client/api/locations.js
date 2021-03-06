'use strict'

export default (reqInstance) => ({
  getLocationById (id) {
    return reqInstance.get(`locations/byId/${id}`)
      .then(res => res.data)
  },

  getAllLocations () {
    return reqInstance.get('locations/all')
      .then(res => res.data)
  },

  updateLocation (updateData) {
    return reqInstance.put('locations/update', updateData)
      .then(res => res.data)
  },

  addNewLocation (locationData) {
    return reqInstance.put('locations/new', locationData)
      .then(res => res.data)
  },

  createLocation (payload) {
    return reqInstance.post('locations/create', payload)
      .then(res => res.data)
  },

  deleteLocation (id) {
    return reqInstance.get(`locations/delete/${id}`)
      .then(res => res.data)
  }
})
