import React from "react";
import { Button, Form, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Auth = () => {
  return (
    <div className="auth">
      <Link to="/">
        <FaArrowLeft
          style={{
            fontSize: "2rem",
            position: "fixed",
            top: "6rem",
            left: "1rem",
          }}
        />
      </Link>
      <h3>Login</h3>
      <Container
        style={{ border: "solid 1px", borderRadius: "5px", padding: "4rem" }}
      >
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              required
              type="number"
              maxLength="10"
              placeholder="Enter your phone number"
            />
          </Form.Group>

          <Link to="/cart">
            <Button variant="success" type="submit">
              Submit
            </Button>

            <h6 style={{ textDecoration: "underline", marginTop: "1rem" }}>
              Will do it later
            </h6>
          </Link>
        </Form>
      </Container>
    </div>
  );
};

export default Auth;
