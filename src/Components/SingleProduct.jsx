

import React,{ useEffect, useState }  from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { ButtonGroup } from "react-bootstrap";

function SingleProduct({ product }) {
  const productImg = product.img ? product.img.replace(/\\/g, "/") : "";
  return (
    <>
      <Card>
      <Card.Img variant="top" src={`http://localhost:5000/${productImg}`} />

        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>Rs{product.price}</Card.Text>
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
