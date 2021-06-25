import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/vue-element-admin/cart/list',
    method: 'get',
    params: query
  })
}

export function updateCart(data) {
  return request({
    url: '/vue-element-admin/cart/update',
    method: 'post',
    data
  })
}

export function deleteCart(data) {
  return request({
    url: '/vue-element-admin/cart/delete',
    method: 'post',
    data
  })
}

export function addCart(data) {
  return request({
    url: '/vue-element-admin/cart/add',
    method: 'post',
    data
  })
}

export function buyCart(id_array) {
  return request({
    url: '/vue-element-admin/cart/buy',
    method: 'post',
    id_array
  })
}