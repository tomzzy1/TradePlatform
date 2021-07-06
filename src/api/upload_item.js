import request from '@/utils/request'

export function upload_data(data) {
  return request({
    url: '/vue-element-admin/upload_item/upload_data',
    method: 'post',
    data
  })
}
