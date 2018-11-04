'use strict'

export default (reqInstance) => ({
  getThemeById (id) {
    return reqInstance.get(`themes/byId/${id}`)
      .then(res => res.data)
  },

  getAllThemes () { 
    console.log('made it to api themes')
    return reqInstance.get('themes/all')
      .then(res => res.data)
  },

  updateTheme (updateData) {
    console.log(updateData)
    return reqInstance.put('themes/update', updateData)
      .then(res => res.data)
  }
})
