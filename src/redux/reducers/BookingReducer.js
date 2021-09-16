import * as types from 'redux/actions/ActionTypes'
import initialState from 'redux/reducers/InitialState'

export default function DataReducer(state = initialState.bookings, action) {
  switch (action.type) {
    case types.LOAD_BOOKINGS_IN_PROGRESS:
      return true
    case types.LOAD_BOOKINGS_SUCCESS:
      return action.bookings.data
    case types.LOAD_BOOKINGS_FAILURE:
      return false
    default:
      return state
  }
}
