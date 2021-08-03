import request from '@/utils/request'

export function fetchList(query) {
  return request({
      url: '/vue-element-admin/setting/list',
      method: 'get',
      params: query
  })
}

export function postQuery(query) {
    return request({
        url: '/vue-element-admin/setting/post_query',
        method: 'get',
        params: query
    })
}

export function postData(data) {
    return request({
      url: '/vue-element-admin/setting/post_data',
      method: 'post',
      data
    })
}