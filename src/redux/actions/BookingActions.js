import * as types from 'redux/actions/ActionTypes'

export const loadBookingsDataInProgress = () => {
  return {
    type: types.LOAD_BOOKINGS_IN_PROGRESS,
  }
}

export const loadBookingsDataSuccess = (bookings) => {
  console.log(bookings)
  return {
    type: types.LOAD_BOOKINGS_SUCCESS,
    bookings,
  }
}
export const loadBookingsDataFailure = () => {
  return {
    type: types.LOAD_BOOKINGS_FAILURE,
  }
}
