'use strict'

export default (reqInstance) => ({
  updatePassword (payload) {
    return reqInstance.put('users/me/changePassword', payload)
      .then(res => res.data)
  },
  getCurrentUser () {
    return reqInstance.get('users/me')
      .then(res => res.data)
  },
  updateProfile (payload) {
    return reqInstance.put('users/me/profile', payload)
      .then(res => res.data)
  }
})
