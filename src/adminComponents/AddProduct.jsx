import React from 'react'
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import AdminSidebar from "./AdminSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function AddProduct() {
  return (
    <div>
       <>
      <Container fluid className="px-3">
        <Row>
          <Col md={2} className="bg-light px-4 py-4">
            <AdminSidebar />
          </Col>
          <Col md={10}>
            <Container>
              <div class="table-responsive">
                <table class="table table-bordered">
                  <thead class="thead-light">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">product list</th>
                     
                      <th>Product Management</th>
                      <th>Product Availability</th>
                      <th>Product Orders</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>pizaa</td>
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
                      <td>Not Available</td>
                      <td>done</td>
                     
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>large pizza</td>
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
                      <td>Not Available</td>
                      <td>Not done</td>
                     
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>burger</td>
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
                      <td> Available</td>
                      <td>done</td>
                     
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>zinger</td>
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
                      <td> Available</td>
                      <td>Not done</td>
                     
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>small pizza</td>
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
                      <td>Not Available</td>
                      <td>done</td>
                     
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

export default AddProduct