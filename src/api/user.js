import request from '@/utils/request'

// export function login(data) {
//   return request({
//     url: '/vue-element-admin/user/login',
//     method: 'post',
//     data
//   })
// }

export function login(data) {
  return request({
    url: 'userPermission/user/checkUser',
    method: 'post',
    data
  })
}

// export function getInfo(token) {
//   return request({
//     url: '/vue-element-admin/user/info',
//     method: 'get',
//     params: { token }
//   })
// }

export function getInfo(token) {
  return request({
    url: 'userPermission/user/getInfo',
    method: 'post',
    headers: {
      token
    }
  })
}

export function logout() {
  return request({
    url: 'userPermission//user/logout',
    method: 'post'
  })
}

export function addUser(data) {
  return request({
    url: 'userPermission//user/addUser',
    method: 'post',
    data
  })
}

// export function logout() {
//   return request({
//     url: 'user/logout',
//     method: 'post'
//   })
// }
export function getVerifyCode() {
  return request({
    url: 'imageManager/image/getVerifyCodeNumber',
    method: 'post'
  })
}

export function fetchList(query) {
  return request({
    url: 'userPermission/user/userlist',
    method: 'post',
    params: query
  })
}

export function fetchUser(data) {
  return request({
    url: 'userPermission/user/userlist',
    method: 'post',
    data

  })
}

export function updateUser(data) {
  return request({
    url: 'userPermission/user/updateUser',
    method: 'post',
    data
  })
}

export function deleteUser(data) {
  return request({
    url: 'userPermission/user/deleteUser',
    method: 'post',
    data
  })
}

export function deleteAll(data) {
  return request({
    url: 'userPermission/user/deleteAll',
    method: 'post',
    data
  })
}


export function searchUser(data) {
  return request({
    url: 'userPermission/user/searchUser',
    method: 'post',
    data
  })
}
