import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/vue-element-admin/cart/list',
    method: 'get',
    params: query
  })
}

export function updateCart(item) {
  return request({
    url: '/vue-element-admin/cart/update',
    method: 'post',
    item
  })
}

export function deleteCart(id) {
  return request({
    url: '/vue-element-admin/cart/delete',
    method: 'post',
    id
  })
}

export function addCart(id) {
  return request({
    url: '/vue-element-admin/cart/add',
    method: 'post',
    id
  })
}

export function buyCart(id_array) {
  return request({
    url: '/vue-element-admin/cart/buy',
    method: 'post',
    id_array
  })
}