import request from '../utils/request'

export function getProducts() {
  return request({
    url: 'basicInformation/product/getProducts',
    method: 'post',
    data: {
    }
  })
}

export function addAndupdateProduct(pdata, flag) {
  return request({
    url: 'basicInformation/product/addAndUpdateProduct',
    method: 'post',
    data: pdata,
    params: {
      'operationFlag': flag
    }
  })
}

export function deleteProduct(data) {
  return request({
    url: 'basicInformation/product/deleteProduct',
    method: 'post',
    data: data
  })
}
