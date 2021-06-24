import request from '@/utils/request'

export function fetchArticle(id) {
  return request({
    url: '/vue-element-admin/article/detail',
    method: 'get',
    params: { id }
  })
}

export function updateArticle(data) {
  return request({
    url: '/vue-element-admin/article/update',
    method: 'post',
    data
  })
}

export function fetchPv(data) {
  return request({
    url: '/vue-element-admin/article/pv',
    method: 'get',
    params: { pv }
  })
}



// used for cart

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
    nethod: 'post',
    id
  })
}