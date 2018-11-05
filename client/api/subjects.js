'use strict'

export default (reqInstance) => ({
  getSubjectById (id) {
    return reqInstance.get(`subjects/byId/${id}`)
      .then(res => res.data)
  },
  getAllSubjects () {
    return reqInstance.get('subjects/all')
      .then(res => res.data)
  },
  updateSubject (updateData) {
    return reqInstance.put('subjects/update', updateData)
      .then(res => res.data)
  },
  addNewSubject (subjectData) {
    return reqInstance.put('subjects/new', subjectData)
      .then(res => res.data)
  },
  deleteSubject (subjectData) {
    return reqInstance.put('subjects/delete', subjectData)
      .then(res => res.data)
  }
})
