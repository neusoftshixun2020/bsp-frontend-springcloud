import request from '@/utils/request'

export function loadProductDetailByPRO_ID(title) {
  return request({
    url: 'basicInformation/product/getProductByTitle',
    method: 'post',
    data:{
      title
    }
  })
}
