import request from '@/utils/request'

export function fetchListAdmin(query) {
    return request({
        url: '/vue-element-admin/homepage/admin',
        method: 'get',
        params: query
    })
}

export function fetchListBuyer(query) {
    return request({
        url: '/vue-element-admin/homepage/buyer',
        method: 'get',
        params: query
    })
}

export function fetchListSeller(query) {
    return request({
        url: '/vue-element-admin/homepage/seller',
        method: 'get',
        params: query
    })
}

export function fetchListWorker(query) {
    return request({
        url: '/vue-element-admin/homepage/worker',
        method: 'get',
        params: query
    })
}