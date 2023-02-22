import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <>
      <Container fluid className="py-2 bg-dark text-white">
        <Container className="py-3" style={{ borderBottom: "2px solid red" }}>
          <Row>
            <Col xs={12} md={6}>
              <h2>Footer Logo Here</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                consectetur, corporis debitis excepturi laborum iure culpa
                voluptatibus ullam architecto quam.
              </p>
            </Col>
            <Col xs={12} md={3}>
              <h3>Quick Links</h3>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </Col>
            <Col xs={12} md={3}>
              <h3>Quick Links</h3>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </Col>
          </Row>
        </Container>

         <Container>
            <p className="text-center pt-3">Copyright © 2023 All Rights Reserved | Develop by G4</p>
         </Container>

      </Container>
    </>
  );
}

export default Footer;
