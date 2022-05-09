import React from "react";
import Navbar from "react-bootstrap/Navbar";
// import NavBar from "./components/Navbar.js";

import "./App.css";
// import Sidebar from "./components/Sidebar";
import Routes from "./Routes";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useHistory } from "react-router-dom";

function App() {

  const history = useHistory();




  return (
    <div className="App container py-3">

      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <Nav.Link className="justify-content-start">
          <a onClick={() => history.goBack()}>{'<<<'}</a>
        </Nav.Link>


        <div className="navbar-header">
          <LinkContainer to="/">
            <Navbar.Brand className="font-weight-bold text-muted text-center">
              Cole DeMeulemeester
            </Navbar.Brand>
          </LinkContainer>
        </div>


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