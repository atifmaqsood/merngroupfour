import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import AdminSidebar from './AdminSidebar'


function ActiveOrders() {
  return (
    <div>
      <>
    
    <Container fluid className="px-3">
        <Row>
          <Col md={2} className="bg-light px-4 py-4">
            <AdminSidebar/>
          </Col>
          <Col md={10}>
            
              
              <Container>

              <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Order ID</th>
      <th scope="col">Customer Name</th>
      <th scope="col">Address</th>
      <th scope="col">Items Ordered</th>
      <th scope="col">Order Status</th>
      <th scope="col">Estimated Time of Delivery</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">#12345</th>
      <td>Naveed</td>
      <td>lahore gulberg III</td>
      <td>Pizza, Soft Drink</td>
      <td><span class="badge badge-dark">Delivered</span></td>
      <td>30 minutes ago</td>
    </tr>
    <tr>
      <th scope="row">#12346</th>
      <td>Naveed</td>
      <td>lahore gulbrg III</td>
      <td>Burger, French Fries, Soft Drink</td>
      <td><span class="badge badge-warning">In Transit</span></td>
      <td>45 minutes ago</td>
    </tr>
    <tr>
      <th scope="row">#12346</th>
      <td>Naveed</td>
      <td>lahore gulbrg III</td>
      <td>Burger, French Fries, Soft Drink</td>
      <td><span class="badge badge-warning">In Transit</span></td>
      <td>45 minutes ago</td>
    </tr>
    <tr>
      <th scope="row">#12346</th>
      <td>Naveed</td>
      <td>lahore gulbrg III</td>
      <td>Burger, French Fries, Soft Drink</td>
      <td><span class="badge badge-warning">In Transit</span></td>
      <td>45 minutes ago</td>
    </tr>
    <tr>
      <th scope="row">#12346</th>
      <td>Naveed</td>
      <td>lahore gulbrg III</td>
      <td>Burger, French Fries, Soft Drink</td>
      <td><span class="badge badge-dark">In Transit</span></td>
      <td>45 minutes ago</td>
    </tr>
    <tr>
      <th scope="row">#12346</th>
      <td>Naveed</td>
      <td>lahore gulbrg III</td>
      <td>Burger, French Fries, Soft Drink</td>
      <td><span class="badge badge-dark">In Transit</span></td>
      <td>45 minutes ago</td>
    </tr>
    <tr>
      <th scope="row">#12346</th>
      <td>Naveed</td>
      <td>lahore gulbrg III</td>
      <td>Burger, French Fries, Soft Drink</td>
      <td><span class="badge badge-dark">In Transit</span></td>
      <td>45 minutes ago</td>
    </tr>
    <tr>
      <th scope="row">#12346</th>
      <td>Naveed</td>
      <td>lahore gulbrg III</td>
      <td>Burger, French Fries, Soft Drink</td>
      <td><span class="badge badge-dark">In Transit</span></td>
      <td>45 minutes ago</td>
    </tr>
    
    

  </tbody>
</table>


              </Container>

               

            
          </Col>
        </Row>
      </Container>

    </>
    </div>
  )
}

export default ActiveOrders