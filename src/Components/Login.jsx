import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function Login() {


  return (
    <>
      <Container>
        <div className="Main">
          <h1 className="text-center my-2 ">Login</h1>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"  />
            </Form.Group>

            <Button variant="primary"  >
              Login
            </Button>
          </Form>

          <Form.Text className="text-muted">
            Don't have an account? <Link to="/signup">Sign up</Link> now.
          </Form.Text>
        </div>
      </Container>
    </>
  );
}

export default Login;
