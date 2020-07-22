import request from '@/utils/request'

export function getPermissionRoute(data) {
  return request({
    url: 'userPermission/permission/getPermissionRoute',
    method: 'post',
    data
  })
}
