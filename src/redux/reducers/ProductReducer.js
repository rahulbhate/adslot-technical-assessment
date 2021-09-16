import * as types from 'redux/actions/ActionTypes'
import initialState from 'redux/reducers/InitialState'

export default function ProductReducer(state = initialState.products, action) {
  switch (action.type) {
    case types.LOAD_PRODUCTS_IN_PROGRESS:
      return true
    case types.LOAD_PRODUCTS_SUCCESS:
      return action.products.data
    case types.LOAD_PRODUCTS_FAILURE:
      return false
    default:
      return state
  }
}
