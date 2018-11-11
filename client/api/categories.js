'use strict'

export default (reqInstance) => ({
  getCategoryById (id) {
    return reqInstance.get(`categories/byId/${id}`)
      .then(res => res.data)
  },

  getAllCategories () {
    return reqInstance.get('categories/all')
      .then(res => res.data)
  },

  updateCategory (updateData) {
    return reqInstance.put('categories/update', updateData)
      .then(res => res.data)
  },

  addNewCategory (categoryData) {
    return reqInstance.put('categories/new', categoryData)
      .then(res => res.data)
  },

  createCategory (payload) {
    return reqInstance.post('categories/create', payload)
      .then(res => res.data)
  },

  deleteCategory (id) {
    return reqInstance.get(`categories/delete/${id}`)
      .then(res => res.data)
  }
})
