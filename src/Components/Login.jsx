import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../redux/authSlice";
import {  useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = ()=>{
    console.log(username,password)
    dispatch(loginUser({ username, password }));
    navigate("/")

  }

  return (
    <>
      <Container>
        <div className="Main">
          <h1 className="text-center my-2 ">Login</h1>

          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </Form.Group>

            <Button variant="primary"  onClick={handleLogin}>
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
