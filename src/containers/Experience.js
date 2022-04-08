import './Experience.css';
import { Button, Card, Navbar, Nav, Container, Offcanvas, NavDropdown, Form, FormControl, Row, Col, Image, CardGroup } from "react-bootstrap"; //update to specifics
import "bootstrap/dist/css/bootstrap.min.css";
// import Sidebar from "../components/Sidebar.js";
// import XpCard from "../containers/XpCard"


function Experience() {
  return (
    <div className="Experience">

      <Container>
        <Row>
          <Col sm>
            {/* Juni */}
            <Card>
              <Card.Img variant="top" src="https://junilearning.com/static/juni_logo_preview-101e7872d58e53d7323d24502e7ff973.png"></Card.Img>
              <Card.Body>
                <Card.Title>Juni Learning</Card.Title>
                <Card.Subtitle>Jun 2019 - May 2021 </Card.Subtitle>
                <Card.Text>asndlasndalskn</Card.Text>
              </Card.Body>
            </Card>
            {/* something else */}
            <Card>
              <Card.Img variant="top" src="https://junilearning.com/static/juni_logo_preview-101e7872d58e53d7323d24502e7ff973.png"></Card.Img>
              <Card.Body>
                <Card.Title>Juni Learning</Card.Title>
                <Card.Subtitle>Jun 2019 - May 2021 </Card.Subtitle>
                <Card.Text>asndlasndalskn</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>


    </div>
  );
}

export default Experience;
