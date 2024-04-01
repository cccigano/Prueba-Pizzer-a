import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import myLogo from "../assets/pizza.png";

function CustomNavbar() {
  return (
    <Navbar bg="danger" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            src={myLogo}
            alt="Mi Logo"
            style={{ width: "50px", marginRight: "10px" }}
          />
          <span
            style={{
              fontFamily: "Great Vibes, cursive",
              fontSize: "30px",
              color: "#faf3ec",
              padding: "5px",
            }}
          >
            The good Pizza
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/carrito"
              style={{
                backgroundColor: "#faf3ec",
                borderRadius: "5px",
                padding: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  background: "white",
                  borderRadius: "50%",
                  padding: "5px",
                }}
              >
                🛒
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
