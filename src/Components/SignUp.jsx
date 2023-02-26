import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/authSlice";
import {  useNavigate } from "react-router-dom";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState();
  const navigate = useNavigate()


  const dispatch = useDispatch();
  // const registerStatus = useSelector((state) => state.auth.status);

  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleFileChange = (e) => {
    if (e.target.files) {
        setFile(e.target.files[0]);
    }
};


const handleSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData();
  formData.append("username", username);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("image", file);
  dispatch(registerUser(formData));
  navigate("/")

};



 

  return (
    <>
      <Container>
        <div className="Main">
          <h1 className="text-center my-2 ">Create an Account</h1>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter Name"
                value={username}
                onChange={handleUsernameChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>

            <div className="form-group">
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
            <Button variant="primary" type="submit">
              Signup
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
