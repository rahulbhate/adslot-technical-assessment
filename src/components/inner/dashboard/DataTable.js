import {
  faArrowCircleDown,
  faArrowCircleUp,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
import { Col, Table } from 'react-bootstrap'
import 'assets/css/style.css'

{
  /* 
    This component is used for showing Shoppers List. 
  */
}
const DataTable = ({ bookings }) => {
  console.log('DATATABLE', bookings)
  const [toggle, setToggle] = useState(true)
  useEffect(() => {
    console.log('called')
  }, [])

  return (
    <>
      <div className="dashboard-card-big">
        <div className="d-flex align-items-center justify-content-between">
          <div className="big-title">Bookings</div>
        </div>
        <div className="big-divider"></div>
        <Col md={12} sm={12} lg={12} id="colname">
          <Table responsive="sm">
            <thead>
              <tr>
                <th className="fix-width"># Id</th>
                <th className="fix-width">Product Id</th>
                <th className="fix-width">Product Name</th>
                <th className="fix-width">Seller Name</th>
                <th style={{ width: '100px' }}>
                  Name
                  {toggle ? (
                    <FontAwesomeIcon
                      icon={faArrowCircleUp}
                      color="#04c56d"
                      onClick={() => {}}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faArrowCircleDown}
                      color="#04c56d"
                      onClick={() => {}}
                    />
                  )}
                </th>
                <th style={{ width: '100px' }}>Quantity </th>
                <th style={{ width: '100px' }}>Rate </th>
                <th style={{ width: '100px' }}>Cost </th>
                <th style={{ width: '100px' }}>Start Date </th>
              </tr>
            </thead>

            <tbody>
              {bookings && !bookings.length ? (
                <tr>
                  <td className="text-center" colspan="5">
                    No Data Available. {bookings.length}
                  </td>
                </tr>
              ) : (
                bookings &&
                bookings.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.productId}</td>
                      <td>{item.productName}</td>
                      <td>{item.sellerName}</td>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>{item.rate}</td>
                      <td>{item.cost}</td>
                      <td>{item.startDate}</td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </Table>
        </Col>
      </div>
    </>
  )
}

export default DataTable
