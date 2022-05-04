import React from "react";
import Navbar from "react-bootstrap/Navbar";
// import NavBar from "./components/Navbar.js";

import "./App.css";
// import Sidebar from "./components/Sidebar";
import Routes from "./Routes";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function App() {


  return (
    <div className="App container py-3">

      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <LinkContainer to="/">
          <Navbar.Brand className="font-weight-bold text-muted">
            Cole DeMeulemeester
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
            <LinkContainer to="">
              <Nav.Link>about</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/experience">
              <Nav.Link>experience</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/music">
              <Nav.Link>music</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes />

      <footer class="py-3 my-0 bg-dark">
        <p class="text-center text-white">
          Copyright &copy; Cole DeMeulemeester 2022
        </p>
      </footer>

    </div>
  );
}

export default App;