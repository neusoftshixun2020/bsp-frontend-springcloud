import request from '../utils/request'

export function checkAccount(wdata) {
  return request({
    url: 'wallet/wallet/checkAccount',
    method: 'post',
    data:
    wdata
  })
}

export function addAccount(wdata) {
  return request({
    url: 'wallet/wallet/addAccount',
    method: 'post',
    data: wdata
  })
}



export function getFund(data) {
  return request({
    url: 'wallet/wallet/getFund',
    method: 'post',
    data: data
  })
}

export function withdraw(wdata) {
  return request({
    url: 'wallet/wallet/withdraw',
    method: 'post',
    data: wdata
  })
}

export function getTransactionalRecord(data) {
  return request({
    url: 'wallet/wallet/getTransactionalRecord',
    method: 'post',
    data: data
  })
}


