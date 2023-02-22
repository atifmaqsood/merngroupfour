import React from 'react'
import { Button, Col, Container, Row, Table,Card } from "react-bootstrap";
import myImage from "../../src/images/f1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
 import UserSidebar from './UserSidebar'


function UserDashboard() {
  return (
    <div>
      <>
      <Container fluid className="px-3">
        <Row>
          <Col md={2} className="bg-light px-4 py-4">
            <UserSidebar />
          </Col>
          <Col md={10}>
            
              <h1 className="my-3 text-center">UserDashboard</h1>
              
              <Container>

              <Row>
                <Col xs={6} md={4}>

                   <Card>
                         <Card.Body>
                           <Card.Title>
                            Order History
                           </Card.Title>
                           <Card.Text>
                             Total Orders : 6
                           </Card.Text>
                           <Button variant="primary">View <FontAwesomeIcon icon={faArrowRight} /></Button>
                         </Card.Body>
                   </Card>

                </Col>
                <Col xs={6} md={4}>

                <Card>
                         <Card.Body>
                           <Card.Title>
                            Wishlists
                           </Card.Title>
                           <Card.Text>
                             Total Wishlists : 14
                           </Card.Text>
                           <Button variant="primary">View <FontAwesomeIcon icon={faArrowRight} /></Button>
                         </Card.Body>
                   </Card>

                </Col>
               </Row>

              </Container>

               

            
          </Col>
        </Row>
      </Container>
    </>
    </div>
  )
}

export default UserDashboard