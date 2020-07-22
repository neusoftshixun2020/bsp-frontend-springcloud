import request from '@/utils/request'

export function getFlow() {
    return request({
      url: 'wallet/wallet/getFlow',
      method: 'post',
    })
  }

  export function auditFlow(data) {
    return request({
      url: 'wallet/wallet/auditFlow',
      method: 'post',
      data: data
    })
  }
