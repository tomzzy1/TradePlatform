import request from  '@/utils/request'

export function fetchList(id) {
    return request({
        url: '/vue-element-admin/order/list',
        method: 'get',
        params: { id }
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
