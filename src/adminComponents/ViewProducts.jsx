import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import AdminSidebar from './AdminSidebar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";



function ViewProducts() {
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
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead class="stripped">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Product list</th>
                      <th scope="col">product image</th>
                      <th scope="col">product review</th>
                      <th scope="col">product management</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>pizza</td>
                      <td>...</td>
                      <td>bad</td>
                      <td>
                        <p>
                          <Button variant="danger" className="mx-2">
                            <FontAwesomeIcon icon={faTrashCan} />
                          </Button>
                          <Button>
                            <FontAwesomeIcon icon={faPenToSquare} />
                          </Button>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>burger</td>
                      <td>...</td>
                      <td>best</td>
                      <td>
                        <p>
                          <Button variant="danger" className="mx-2">
                            <FontAwesomeIcon icon={faTrashCan} />
                          </Button>
                          <Button>
                            <FontAwesomeIcon icon={faPenToSquare} />
                          </Button>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>zinger</td>
                      <td>...</td>
                      <td>nice</td>
                      <td>
                        <p>
                          <Button variant="danger" className="mx-2">
                            <FontAwesomeIcon icon={faTrashCan} />
                          </Button>
                          <Button>
                            <FontAwesomeIcon icon={faPenToSquare} />
                          </Button>
                        </p>
                      </td>
                    </tr>s
                    <tr>
                      <th scope="row">4</th>
                      <td>cold soft drink</td>
                      <td>...</td>
                      <td>best</td>
                      <td>
                        <p>
                          <Button variant="danger" className="mx-2">
                            <FontAwesomeIcon icon={faTrashCan} />
                          </Button>
                          <Button>
                            <FontAwesomeIcon icon={faPenToSquare} />
                          </Button>
                        </p>
                      </td>
                      <td>
                       
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
           

              </Container>

               

            
          </Col>
        </Row>
      </Container>

    </>
    </div>
  )
}

export default ViewProducts