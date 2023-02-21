import React from 'react'
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import AdminSidebar from "./AdminSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function Users() {
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
                <table class="table table-striped">
                  <thead class="stripped">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">User list</th>
                      <th scope="col">User Address</th>
                      <th scope="col">order placed</th>
                      <th scope="col">order management</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Ali</td>
                      <td>johar town</td>
                      <td>yes</td>
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
                      <td>ali</td>
                      <td> gulberg III</td>
                      <td> yes</td>
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
                      <td>farhan</td>
                      <td>gulberg II</td>
                      <td>No</td>
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
                      <th scope="row">4</th>
                      <td>atif</td>
                      <td>LAHORE</td>
                      <td>No</td>
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

export default Users