'use strict'

export default (reqInstance) => ({
  getThemeById (id) {
    return reqInstance.get(`themes/byId/${id}`)
      .then(res => res.data)
  },

  getAllThemes () {
    return reqInstance.get('themes/all')
      .then(res => res.data)
  },

  updateTheme (updateData) {
    return reqInstance.put('themes/update', updateData)
      .then(res => res.data)
  },

  addNewTheme (themeData) {
    return reqInstance.put('themes/new', themeData)
      .then(res => res.data)
  },

  createTheme (payload) {
    return reqInstance.post('themes/create', payload)
      .then(res => res.data)
  },

  deleteTheme (id) {
    return reqInstance.get(`themes/delete/${id}`)
      .then(res => res.data)
  }
})
