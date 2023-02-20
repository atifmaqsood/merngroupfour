import React from 'react'

function OrderStatus() {
  return (
    <div>
      <>
    
    <Container fluid className='px-3'>

       <Row>
        <Col  md={2} className="bg-light px-4 py-4">
          <UserSidebar/>
        </Col>
        <Col md={10}>
          
    <h1 className='my-3 text-center'>Order Status</h1>
         
<Form className='mx-5 px-5'>
<Form.Text className="text-muted">
         Enter Your Order ID to check order status
        </Form.Text>
<InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter Order ID"
          aria-label="Enter Order ID"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
      </InputGroup>
</Form>
    

        </Col>
       </Row>

    </Container>

    </>
    </div>
  )
}

export default OrderStatus