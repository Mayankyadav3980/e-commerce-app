import React from "react";
import logo from "../images/emart.png";
import { FaHome, FaShoppingCart, FaCreativeCommonsBy } from "react-icons/fa";
import { Navbar, Badge, FormControl, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import "./styles.css";

const Header = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <Navbar bg="light" varient="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/e-commerce-app">
            <img src={logo} alt="" className="logo" />
          </Link>
        </Navbar.Brand>

        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Search a product..."
            className="m-auto"
            type="search"
            aria-label="Search"
          />
        </Navbar.Text>

        <Nav>
          <Nav.Link>
            <Link to="/e-commerce-app">
              Home
              <FaHome fontSize="20px" />
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/e-commerce-app/Auth">
              Login
              <FaCreativeCommonsBy fontSize="20" />
            </Link>
          </Nav.Link>

          <Nav.Link>
            <Link to="/e-commerce-app/cart">
              Cart
              <FaShoppingCart color="black" fontSize="20" />
              <Badge>{cart.length}</Badge>
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
