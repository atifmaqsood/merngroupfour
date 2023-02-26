import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import myImage from "../../src/images/f1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

function Cartitems({product}) {
  console.log("first",product)
  return (
    <>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>
              <img style={{ height: "50px", width: "50px" }} src={myImage} />
            </td>
            <td>{product._id}</td>
            <td>Rs900</td>
            <td>
              <Button variant="danger">-</Button> {" 3 "}
              <Button variant="success">+</Button>
            </td>
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
            <td>
              <img style={{ height: "50px", width: "50px" }} src={myImage} />
            </td>
            <td>Pizza</td>
            <td>Rs900</td>
            <td>
              <Button variant="danger">-</Button> {" 3 "}
              <Button variant="success">+</Button>
            </td>
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
            <td>
              <img style={{ height: "50px", width: "50px" }} src={myImage} />
            </td>
            <td>Pizza</td>
            <td>Rs900</td>
            <td>
              <Button variant="danger">-</Button> {" 3 "}
              <Button variant="success">+</Button>
            </td>
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
        </tbody>
      </Table>
    </>
  );
}

export default Cartitems;
