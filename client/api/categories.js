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
  deleteCategory (categoryData) {
    return reqInstance.put('categories/delete', categoryData)
      .then(res => res.data)
  }
})
