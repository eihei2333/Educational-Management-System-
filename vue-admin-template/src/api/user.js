import request from '@/utils/request'

export function login(data) {
  return request({
    url: 'http://127.0.0.1:5000/login ',
    method: 'POST',
    data
  })
}

export function getInfo(token) {
  return request({
    url: 'http://127.0.0.1:5000/getInfo',
    method: 'GET',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}