import * as types from 'redux/actions/ActionTypes'

export const loadSellersDataInProgress = () => {
  return {
    type: types.LOAD_SELLERS_IN_PROGRESS,
  }
}

export const loadSellersDataSuccess = (sellers) => {
  console.log(sellers)
  return {
    type: types.LOAD_SELLERS_SUCCESS,
    sellers,
  }
}
export const loadSellersDataFailure = () => {
  return {
    type: types.LOAD_SELLERS_FAILURE,
  }
}
