import Axios from 'axios'
import qs from 'qs'

Axios.defaults.transformRequest = function(data) {
  return qs.stringify(data, {arrayFormat: 'brackets'})
}

export const adminApi = Axios.create({
  baseURL: '/wish-system/mesData',
  timeout: 5000,
  transformResponse: (data) => {
    let resData = JSON.parse(data)
    return resData
  }
})
