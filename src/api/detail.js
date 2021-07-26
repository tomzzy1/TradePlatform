import request from '@/utils/request'

export function fetchList(data) {
    return request({
        url: '/vue-element-admin/request/list',
        method: 'get',
        params: data
    })
}

export function addToCart(data) {
    return request({
        url: '/vue-element-admin/request/add_to_cart',
        method: 'post',
        data
    })
}