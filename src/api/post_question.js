import request from '@/utils/request'

export function fetchInfo(data) {
  return request({
      url: '/vue-element-admin/post_question/info',
      method: 'get',
      params: data
  })
}

export function postQuestion(data) {
    return request({
      url: '/vue-element-admin/post_question/post',
      method: 'post',
      data
    })
  }