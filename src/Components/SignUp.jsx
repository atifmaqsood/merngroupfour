import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

function SignUp() {


  return (
    <>
      <Container>
        <div className="Main">
          <h1 className="text-center my-2 ">Create an Account</h1>

          <Form >
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter Name"
                
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
               
              />
            </Form.Group>

           
            <Form.Group className="mb-3" controlId="formBasicImg">
                  <Form.Label>Profile Image</Form.Label>
                  <Form.Control
                    type="file"
                    placeholder="Enter image"
                    name="image"
                    accept="image/*"
                  />
                </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>

          </Form>

          <Form.Text className="text-muted">
            Already have an account? <Link to="/login">Login</Link> here.
          </Form.Text>
        </div>
      </Container>
    </>
  );
}

export default SignUp;
