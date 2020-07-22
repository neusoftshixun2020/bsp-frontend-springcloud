import request from '../utils/request'

export function getAmazonStores(sdata) {
  return request({
    url: 'basicInformation/bvo/getAmazonStore',
    method: 'post',
    data:
      sdata
  })
}

export function getEBayStores(sdata) {
  return request({
    url: 'basicInformation/bvo/getEbayStore',
    method: 'post',
    data: sdata
  })
}



export function addStore(sdata) {
  return request({
    url: 'basicInformation/bvo/addStore',
    method: 'post',
    data: sdata
  })
}

export function getDsr(user_id) {
  return request({
    url: 'basicInformation/bvo/getDsr',
    method: 'post',
    data: user_id
  })
}


