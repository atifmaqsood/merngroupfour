import React from 'react'
import { Col, Container, Row,Button,InputGroup } from 'react-bootstrap'
import Products from './Products'
import Sidebar from './Sidebar'
import Form from 'react-bootstrap/Form';

function Home() {
  return (
    <>
    
    <Container fluid>
      <Row>
        <Col style={{backgroundColor:"white"}} sm={3}><Sidebar/></Col>
        <Col sm={9}>

<Row>
  <Col className="py-3" sm={6}>
    <h2>Top Products</h2>
  </Col>
  <Col sm={6} className="py-3"> <Form.Select aria-label="Default select example">
      <option>Search Top Variants</option>
      <option value="1">Top Rated</option>
      <option value="2">Popluar Items</option>
      <option value="3">Availabale Items</option>
    </Form.Select></Col>
</Row>

            <Products/>

            </Col>
      </Row>
      
    </Container>
   

       

    </>
  )
}

export default Home