import React from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Checkout() {
  return (
    <>
    
    <Container className='my-3'>

             <h1 className='text-center py-5'>Checkout</h1>

        <Row>

           <Col md={8} sm={12}>


    <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
      </Form.Group>
    

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" >
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="Enter City Name" />
      </Form.Group>

        <Form.Group className="mb-3" >
        <Form.Label>Zip Code</Form.Label>
        <Form.Control type="number" placeholder="Enter Zip Code" />
      </Form.Group>
      
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>


           </Col>
           <Col md={4} sm={12}>

           <Container className="bg-light py-5 px-5">

       <p><strong>Sub Total</strong>  : <span>Rs 450</span></p>
       <p> <strong>Shipping</strong>   : <span>Rs 250</span></p>
       <p><strong>Total</strong>  : <span>Rs 700</span></p>
       <p><strong>Payment Method</strong>  : <span>Cash on delivery</span></p>
       <Link to='/checkout' className="btn btn-info" >Pay Now</Link>

</Container>

           </Col>

        </Row>

    </Container>

    </>
  )
}

export default Checkout