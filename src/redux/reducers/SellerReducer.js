import * as types from 'redux/actions/ActionTypes'
import initialState from 'redux/reducers/InitialState'

export default function SellerReducer(state = initialState.sellers, action) {
  switch (action.type) {
    case types.LOAD_SELLERS_IN_PROGRESS:
      return true
    case types.LOAD_SELLERS_SUCCESS:
      return action.sellers.data
    case types.LOAD_SELLERS_FAILURE:
      return false
    default:
      return state
  }
}
