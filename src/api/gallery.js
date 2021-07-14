import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/vue-element-admin/gallery/list',
    method: 'get',
    params: query
  })
}

export function addtoCart(data) {
  return request({
    url: '/vue-element-admin/gallery/cart',
    method: 'post',
    data
  })
}

export function displayDatasetInfo(data) {
  return request({
    url: '/vue-element-admin/gallery/datasetInfo',
    method: 'get',
    params: data
  })
}



