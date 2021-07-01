import request from '@/utils/request'

export function fetchList(data) {
    return request({
        url: '/vue-element-admin/crowdsourcing/list',
        method: 'get',
        params: data
    })
}