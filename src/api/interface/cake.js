import {adminApi} from 'api/instance'

// 查询
export function inquire(params) {
  return adminApi.post('/cake.json', params).then(res => res.data)
}

// // 新建
// export function create(params) {
//   return adminApi.post('/menu/add.do', params).then(res => res.data)
// }
//
// // 编辑
// export function update(params) {
//   return adminApi.post('/menu/update.do', params).then(res => res.data)
// }
//
// // 删除action
// export function del(params) {
//   return adminApi.post('/menu/del.do', params).then(res => res.data)
// }
//
// // 条目详情
// export function itemDetail(params) {
//   return adminApi.post('/menu/get.do', params).then(res => res.data)
// }
