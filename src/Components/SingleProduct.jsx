

import React,{ useEffect, useState }  from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { ButtonGroup } from "react-bootstrap";
import myImg from "../images/f1.jpeg"

function SingleProduct() {

  return (
    <>
      <Card>
      <Card.Img variant="top" src={myImg} />

        <Card.Body>
          <Card.Title>Dummy Title</Card.Title>
          <Card.Text>Rs 323</Card.Text>
          <ButtonGroup>
            <Button variant="primary" className="mx-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Cart">
              <FontAwesomeIcon icon={faCartArrowDown} /> 
            </Button>
            <Button variant="primary" className="mx-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist">
              <FontAwesomeIcon icon={faHeart} />
            </Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    </>
  );
}

export default SingleProduct;
