import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import myImage from "../../src/images/f1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Cartitems from "./Cartitems";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <>
      <h1 className="text-center">Cart</h1>

      <Container fluid className="my-5">
        <Row>
          <Col md={9} sm={12}>
            <Container>
             <Cartitems/>
            </Container>
          </Col>
          <Col md={3} sm={12}>
            
            <Container className="bg-light py-5 px-5">

               <p><strong>Sub Total</strong>  : <span>Rs 450</span></p>
             <p> <strong>Shipping</strong>   : <span>Rs 250</span></p>
               <p><strong>Total</strong>  : <span>Rs 700</span></p>
               <Link to='/checkout' className="btn btn-info" >Proceed to Checkout</Link>

            </Container>

          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cart;
