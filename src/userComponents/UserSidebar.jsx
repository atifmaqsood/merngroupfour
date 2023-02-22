import React, { useState } from "react";
import { Col, Container, Navbar, Nav, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
function UserSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
 
  return (
    <div>
      <>
      <Navbar expand="lg">
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setIsOpen(!isOpen)}
        />
        <Navbar.Collapse id="basic-navbar-nav" className={isOpen ? "show" : ""}>
          <Nav className="flex-column">
            <Nav.Item >
              <Nav.Link  className={`${location.pathname==="/user/userDashboard"?'navActive' : "" }`} as={Link} to="/user/userDashboard">
                Dashboard
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} className={`${location.pathname==="/user/orderStatus"?'navActive' : "" }`} to="/user/orderStatus">
                Order Status
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} className={`${location.pathname==="/user/orderHistory"?'navActive' : "" }`} to="/user/orderHistory">
                Order History
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} className={`${location.pathname==="/user/whishlistHistory"?'navActive' : "" }`} to="/user/whishlistHistory">
                {" "}
                My Wishlist{" "}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} className={`${location.pathname==="/user/changePassword"?'navActive' : "" }`} to="/user/changePassword">
                {" "}
                Change Password{" "}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} className={`${location.pathname==='/user/logout'?'navActive' : "" }`} to="/user/logout">
                {" "}
                Logout{" "}
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
    </div>
  )
}

export default UserSidebar