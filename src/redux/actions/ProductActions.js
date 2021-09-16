import * as types from 'redux/actions/ActionTypes'

export const loadProductsDataInProgress = () => {
  return {
    type: types.LOAD_PRODUCTS_IN_PROGRESS,
  }
}

export const loadProductsDataSuccess = (products) => {
  console.log(products)
  return {
    type: types.LOAD_PRODUCTS_SUCCESS,
    products,
  }
}
export const loadProductsDataFailure = () => {
  return {
    type: types.LOAD_PRODUCTS_FAILURE,
  }
}
