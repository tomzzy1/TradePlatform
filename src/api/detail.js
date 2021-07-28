import request from '@/utils/request'

export function fetchList(data) {
    return request({
        url: '/vue-element-admin/detail/list',
        method: 'get',
        params: data
    })
}

export function addToCart(data) {
    return request({
        url: '/vue-element-admin/detail/add_to_cart',
        method: 'post',
        data
    })
}

export function checkQuery(data) {
    return request({
        url: '/vue-element-admin/detail/check',
        method: 'get',
        params: data
    })
}