import axios from 'axios'
import URL from 'constants/Endpoints'

const dataService = {
  // Get bookings data from API
  async getBookings() {
    const option = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
      url: 'https://blooming-fortress-38880.herokuapp.com/bookings',
    }
    try {
      let res = await axios(option)
      console.log(res)
      return res.data
    } catch (err) {
      console.error(err)
      throw new Error(err.response.data.message)
    }
  },

  // Get sellers data from API
  async getSellers() {
    const option = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
      url: `${URL.BASE_URL}${URL.SELLERS}`,
    }
    try {
      let res = await axios(option)
      console.log(res)
      return res.data
    } catch (err) {
      console.error(err)
      throw new Error(err.response.data.message)
    }
  },

  // Get products data from API
  async getProducts() {
    const option = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
      url: `${URL.BASE_URL}${URL.PRODUCTS}`,
    }
    try {
      let res = await axios(option)
      console.log(res)
      return res.data
    } catch (err) {
      console.error(err)
      throw new Error(err.response.data.message)
    }
  },
}

export default dataService
