// import React from 'react'
import React, { useState } from "react";
import { Col, Container, Navbar, Nav, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function AdminSidebar() {
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
            <Navbar.Toggle
       
        />
              <Nav.Link  className={`${location.pathname==="/admin/adminDashboard"?'navActive' : "" }`} as={Link} to="/admin/adminDashboard">
                Dashboard
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} className={`${location.pathname==="/admin/users"?'navActive' : "" }`} to="/admin/users">
                Users
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} className={`${location.pathname==="/admin/addProduct"?'navActive' : "" }`} to="/admin/addProduct">
                Add Product
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} className={`${location.pathname==="/admin/viewProducts"?'navActive' : "" }`} to="/admin/viewProducts">
                {" "}
                View Products{" "}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} className={`${location.pathname==="/admin/activeOrders"?'navActive' : "" }`} to="/admin/activeOrders">
                {" "}
                Active Orders{" "}
              </Nav.Link>
            </Nav.Item>

           
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    
    </>
 
    </div>
  )
}

export default AdminSidebar