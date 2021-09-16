import {
  loadBookingsDataFailure,
  loadBookingsDataInProgress,
  loadBookingsDataSuccess,
} from 'redux/actions/BookingActions'
import {
  loadSellersDataFailure,
  loadSellersDataInProgress,
  loadSellersDataSuccess,
} from 'redux/actions/SellerActions'
import {
  loadProductsDataFailure,
  loadProductsDataInProgress,
  loadProductsDataSuccess,
} from 'redux/actions/ProductActions'
import dataService from 'services/DataService'
{
  /* 
    Auth Type, Auth Sub and Account Level check to login user as
    a Store Manager or Retailer Owner common component 
  */
}

export const loadBookings = () => async (dispatch, getState) => {
  try {
    dispatch(loadBookingsDataInProgress())
    const data = await dataService.getBookings()
    dispatch(loadBookingsDataSuccess(data))
  } catch (e) {
    dispatch(loadBookingsDataFailure())
  }
}

export const loadSellers = () => async (dispatch, getState) => {
  try {
    dispatch(loadSellersDataInProgress())
    const data = await dataService.getSellers()
    dispatch(loadSellersDataSuccess(data))
  } catch (e) {
    dispatch(loadSellersDataFailure())
  }
}

export const loadProducts = () => async (dispatch, getState) => {
  try {
    dispatch(loadProductsDataInProgress())
    const data = await dataService.getProducts()
    dispatch(loadProductsDataSuccess(data))
  } catch (e) {
    dispatch(loadProductsDataFailure())
  }
}
