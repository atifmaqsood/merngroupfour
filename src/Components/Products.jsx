import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SingleProduct from './SingleProduct'

function Products() {
  return (
    <>
    <Container>
    <Row className='my-3'>
        <Col xs={6} md={4}>
        <SingleProduct/>
        </Col>
        <Col xs={6} md={4}>
        <SingleProduct/>
        </Col>
        <Col xs={6} md={4}>
        <SingleProduct/>
        </Col>
      </Row>
      <Row className='my-3'>
        <Col xs={6} md={4}>
        <SingleProduct/>
        </Col>
        <Col xs={6} md={4}>
        <SingleProduct/>
        </Col>
        <Col xs={6} md={4}>
        <SingleProduct/>
        </Col>
      </Row>
    </Container>
    

    </>
  )
}

export default Products