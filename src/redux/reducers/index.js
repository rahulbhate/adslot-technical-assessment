import { combineReducers } from 'redux'
import bookings from 'redux/reducers/BookingReducer'
import products from 'redux/reducers/ProductReducer'
import sellers from 'redux/reducers/SellerReducer'
const rootReducer = combineReducers({
  bookings: bookings,
  products: products,
  sellers: sellers,
})

export default rootReducer
