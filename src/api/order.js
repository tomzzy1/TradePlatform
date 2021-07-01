import request from '@/utils/request'

export function fetchList(data) {
    return request({
        url: '/vue-element-admin/order/list',
        method: 'get',
        params: data
    })
}

export function orderConfirm(data) {
    return reuqest({
        url: '/vue-element-admin/order/confirm',
        method: 'post',
        data
    })
}

export function orderCompleted(data) {
    return request({
        url: '/vue-element-admin/order/confirm',
        method: 'post',
        data
    })
}
