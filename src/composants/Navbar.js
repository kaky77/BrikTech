import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/logo.png";
import "./styles/Navbar.css";

function BarreNavig() {
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="py-3 border-bottom shadow-sm fixed-top"
    >
      <Container>
        {/* Conteneur principal avec logo au centre */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="mx-auto d-flex justify-content-center align-items-center"
        >
          <img
            src={logo}
            alt="Logo"
            style={{ height: "60px" }}
            className="me-2"
          />
          <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            MonSite
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Menus centrés */}
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className="text-center px-3">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-center px-3">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/service" className="text-center px-3">
              Service
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-center px-3">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarreNavig;
