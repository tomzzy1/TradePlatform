import request from '@/utils/request'

export function uploadItem(data) {
  return request({
    url: '/vue-element-admin/upload_item/upload',
    method: 'post',
    data
  })
}