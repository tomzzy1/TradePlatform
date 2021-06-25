import request from  '@/utils/request'

export function fetchList() {
    return request({
        url: 'vue-element-admin/order/list',
        method: 'get',
        _
    })
}

export function orderConfirm(price) {
    return reuqest({
        url: 'vue-element-admin/order/confirm',
        method: 'post',
        price
    })
}
