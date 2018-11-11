import _get from 'lodash/get'

import api from '../../../api/main'

export const apiRequest = ({ commit, dispatch }, payload) => {
  const func = payload.func
  const args = payload.args || []
  return _get(api, func)(...args)
    .catch(error => {
      const forceReload = _get(error, ['response', 'data', 'forceReload'], false)
      if (forceReload) {
        // Reload from the server should take us back to login page
        window.location.reload(true)
        return
      }
      const payload = {
        message: 'Request Failed'
      }
      // TODO: Handle these errors better
      console.error('API Request Error:', payload)

      // Throw again so any chained promises (that expect successful response) won't run
      throw error
    })
}
