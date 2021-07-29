import request from '@/utils/request'

export function fetchList(data) {
  return request({
    url: '/vue-element-admin/homepage_admin/fetchlist',
    method: 'get',
    params:  data
  })
}