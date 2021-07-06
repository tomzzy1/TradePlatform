import request from '@/utils/request'

export function postQuestion(data) {
    return request({
      url: '/vue-element-admin/post_question/post',
      method: 'post',
      data
    })
  }