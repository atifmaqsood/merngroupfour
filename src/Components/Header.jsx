import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
// import { useSelector } from "react-redux";
// import { fetchProducts } from "./adminComponents/store/productslice";

function Header() {
  // const items = useSelector((state) => state.cart);
  // console.log("Cart items");
  // console.log(items);
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            Food Store
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "200px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About us
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Button
                as={Link}
                to="/myWhishlist"
                variant="primary"
                style={{ paddingRight: "5px" }}
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{ paddingRight: "5px", paddingtop: "10px" }}
                />{" "}
                <Badge bg="secondary"></Badge>
                <span className="visually-hidden">unread messages</span>
              </Button>
              <Button
                as={Link}
                to="/cart"
                variant="primary"
                style={{ paddingRight: "5px" }}
              >
                <FontAwesomeIcon
                  icon={faCartArrowDown}
                  style={{ paddingRight: "5px", paddingtop: "10px" }}
                />{" "}
                <Badge bg="secondary">Length</Badge>
                <span className="visually-hidden">unread messages</span>
              </Button>
              <span className="" style={{ paddingLeft: "5px" }}></span>

              <Button
                as={Link}
                to="/user/userDashboard"
                className="btn btn-primary btn-lg"
              >
                <FontAwesomeIcon icon={faUser} />
              </Button>
              <Button
                as={Link}
                to="/login"
                className="btn btn-success mx-2 btn-lg"
              >
                Login
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
