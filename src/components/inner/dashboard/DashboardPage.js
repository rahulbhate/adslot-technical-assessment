import Footer from 'components/common/Footer'
import Data from 'components/common/Data.json'
import { MetaDecorator } from 'components/common/MetaDecorator'
import NavBar from 'components/common/NavBar'
import getBookings from 'selectors/bookings'
import React, { useState, useEffect } from 'react'
import { Col, Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import DataTable from './DataTable'
import DropDown from 'components/common/DropDown'
import { loadBookings, loadProducts, loadSellers } from 'redux/thunks/Thunks'
import LoadingIndicator from 'components/common/LoadingIndicator'

export const DashboardPage = ({
  loadBookings,
  loadProducts,
  loadSellers,
  sellers,
  products,
  bookings,
  ...props
}) => {
  const [category, setCategory] = useState('')
  useEffect(() => {
    console.log('USE EFFECT CALLED')
    getData()
  }, [])
  async function getData() {
    await loadBookings()
    await loadProducts()
    await loadSellers()
  }

  let content = (
    <section className="dashboard-container">
      <MetaDecorator
        title={Data.DashboardTitle}
        description={Data.DashboardDescription}
      />
      <NavBar />

      {bookings ? (
        <>
          <Container>
            <Col lg={12} md={12} sm={12} xs={12}>
              <section>
                <h2>Dashboard</h2>
              </section>
            </Col>

            <Col lg={12} md={12} sm={12} xs={12}>
              <DataTable bookings={bookings} />
            </Col>
          </Container>
        </>
      ) : (
        <LoadingIndicator />
      )}
      <Footer />
    </section>
  )

  return content
}
const mapStateToProps = (state) => {
  return {
    bookings: getBookings(state.bookings, state.products, state.sellers),
    products: state.products,
    sellers: state.sellers,
  }
}

const mapDispatchToProps = {
  loadBookings,
  loadProducts,
  loadSellers,
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)
