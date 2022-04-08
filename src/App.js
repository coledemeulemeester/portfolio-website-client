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
      {/* <header > */}
      {/* todo: FIX THIS */}
      {/* <Sidebar ></Sidebar> */}
      {/* DOING: NAV BAR */}

      {/* <Navbar bg="light" expand={false} sticky="top">
          <Container fluid>
            <Navbar.Brand href="#">Cole DeMeulemeester</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar> */}


      {/* </header> */}

      {/* FINISHING THE SIDEBAR STYLING */}
      {/* <NavBar />
      <Sidebar /> */}

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