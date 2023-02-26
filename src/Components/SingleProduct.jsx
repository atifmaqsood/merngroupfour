import React,{ useEffect, useState }  from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { ButtonGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../store/cartSlice";
import { addToCart } from "../redux/cartSlice";


function SingleProduct({ product }) {
  const productImg = product.img ? product.img.replace(/\\/g, "/") : "";

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.cart);

  const handleAddToCart = () => {
    dispatch(addToCart({ productID: product._id, quantity: 1 }));
  };

  return (
    <>
      <Card>
      <Card.Img variant="top" style={{ height:"190px"}} src={`http://localhost:5000/${productImg}`} />

        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>Rs{product.price}</Card.Text>
          <ButtonGroup>
            <Button variant="primary" className="mx-1" onClick={handleAddToCart} data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Cart">
              <FontAwesomeIcon icon={faCartArrowDown} /> 
            </Button>
            <Button variant="primary" className="mx-1" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Wishlist">
              <FontAwesomeIcon icon={faHeart} />
            </Button>
          </ButtonGroup>
          {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
        </Card.Body>
      </Card>
    </>
  );
}

export default SingleProduct;
