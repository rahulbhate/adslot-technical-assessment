{
  /* Api endpoints configuration - for Retailer service, Branch service,
    Category service, Notification service, Payment service, App service and ReceiptAnalysis service
   */
}
const PRODUCTION = false
let BASE_URL = ''

if (PRODUCTION) {
  BASE_URL = 'https://blooming-fortress-38880.herokuapp.com/'
} else {
  BASE_URL = 'https://blooming-fortress-38880.herokuapp.com/'
}

export default {
  BASE_URL: BASE_URL,
  BOOKINGS: 'bookings',
  SELLERS: 'sellers',
  PRODUCTS: 'products',
  GET_BOOKING_BY_ID: '?id=',
  GET_SELLER_BY_ID: '?id=',
  GET_PRODUCT_BY_ID: '?id=',
}
