import {adminApi} from 'api/instance'

// 查询
export function inquire(params) {
  return adminApi.post('/surround.json', params).then(res => res.data)
}
