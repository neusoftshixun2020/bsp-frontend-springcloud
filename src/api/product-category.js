import request from '@/utils/request'

export function fetchList() {
  return request({
    url: 'basicInformation/productcategory/list',
    method: 'post',

  })
}

export function deleteRecord(data) {
  return request({
    url: 'basicInformation/productCategory/deleteProductCategory',
    method: 'post',
    data
  })
}


export function addRecord(PRC_ID,TITLE,CATEGORY_NAME,SECOND_CATEGORY,image) {
  return request({
    url: 'basicInformation/productcategory/addRecord',
    method: 'post',
    data: {
      PRC_ID,
      TITLE,
      CATEGORY_NAME,
      SECOND_CATEGORY,
      image
    }
  })
}

export function updateRecord(PRC_ID,TITLE,CATEGORY_NAME,SECOND_CATEGORY,image) {
  return request({
    url: 'basicInformation/productcategory/updateRecord',
    method: 'post',
    data: {
      PRC_ID,
      TITLE,
      CATEGORY_NAME,
      SECOND_CATEGORY,
      image
    }
  })
}

export function searchRecord(TITLE) {

  return request({
    url: 'basicInformation/productcategory/searchRecord',
    method: 'post',
    data:{
      TITLE
    }
  })
}

export function changeState(PRC_ID,state) {
  return request({
    url: 'basicInformation/productcategory/changeState',
    method: 'post',
    data: {
      PRC_ID,
      state
    }
  })
}

export function addAndUpdateProductCategory(data, operationFlag) {
  return request({
    url: 'basicInformation/productCategory/addOrUpdateProductCategory',
    method: 'post',
    data: data,
    params: {
      'operationFlag': operationFlag
    }
  })
}

export function getAllProductCategory() {
  return request({
    url: 'basicInformation/productCategory/getAllCategory',
    method: 'post',
  })
}
