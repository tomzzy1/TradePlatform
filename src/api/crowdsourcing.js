import request from '@/utils/request'

export function fetchList(query) {
    return request({
        url: '/vue-element-admin/crowdsourcing/list',
        method: 'get',
        params: query
    })
}

export function fetchAnswerList(data) {
    return request({
        url: '/vue-element-admin/crowdsourcing/answer_list',
        method: 'get',
        params: data
    })
}

export function submitAnswers(data) {
    return request({
        url: '/vue-element-admin/crowdsourcing/submit_answer',
        method: 'post',
        data
    })
}