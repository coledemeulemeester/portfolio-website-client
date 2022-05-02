import './About.css';
import { Button, Card, Navbar, Nav, Container, Offcanvas, NavDropdown, Form, FormControl, Row, Col, Image, CardGroup } from "react-bootstrap"; //update to specifics
import "bootstrap/dist/css/bootstrap.min.css";
// import Sidebar from "../components/Sidebar.js";


function About() {
  return (
    <div className="About">

      {/* potensh add classname = "jansdjlansd" */}


      <main>
        {/* DOING: GRID */}
        <Container className="px-1 mx-5">
          <Row className="px-1 my-4">
            <Col sm={3}>
              {/* headshot */}
              <Image src="https://picsum.photos/900/900"
                fluid
                roundedCircle >
              </Image>
              {/* ROles of interest */}
              <Card>
                <Card.Body>
                  <Card.Title>Fields of Interest</Card.Title>
                  {/* add hyper links to resume experience */}
                  <Card.Text>Product Management</Card.Text>
                  <Card.Text>EShip</Card.Text>
                  <Card.Text>SWE</Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Foods for Thought</Card.Title>
                  {/* add hyper links to resume experience */}
                  <Card.Text>thing 1</Card.Text>
                  <Card.Text>thing 2</Card.Text>
                  <Card.Text>thing 3</Card.Text>
                </Card.Body>
              </Card>

              {/* Foods for thoughts */}
            </Col>
            <Col sm={9}>
              {/* ABOUT BLURB */}
              <Card>
                <Card.Body>
                  <Card.Title>Hello there!</Card.Title>
                  <Card.Text>(what am, what want...)A growing engineer + lifelong adventurer. Excited by Aboutlying technology to make everyday human needs more efficient, and passionate about making everyday life more meaningful.</Card.Text>
                  <Card.Text>(ACOLADES) Product and Software experience w/ skills in human-centered design, prototyping (figma, usability testing), mvp development, full-stack (serverless, react bootstrap, python, java), mobile-dev (viper, swift).</Card.Text>
                  <Card.Text>(fun) A few of my favorite adventures so far: Skiing Der Weiße Ring (White Ring), racing on the Bonneville Salt Flats, listening to Firefly Music Festival.</Card.Text>
                </Card.Body>
              </Card>

              {/* Music */}


              <Card>
                <Card.Body>
                  <Card.Title>Spotify</Card.Title>
                  <CardGroup>
                    {/* todo: add title + see more link */}
                    {/* <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/2V4Q4KnBI72j4sO8LTb59S?utm_source=generator" width="250" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe> */}

                    <Card>
                      {/* todo: add spotify playlist images */}
                      <Card.Img variant="top" src="https://picsum.photos/300/300" />
                      <Card.Body>
                        <Card.Title>rh rn</Card.Title>
                        <Card.Subtitle>right here, right now</Card.Subtitle>

                      </Card.Body>
                      <Card.Footer className="text-muted">Last updated 3 mins ago</Card.Footer>
                    </Card>
                    <Card>
                      {/* todo: add spotify playlist images */}
                      <Card.Img variant="top" src="https://picsum.photos/200/200" />
                      <Card.Body>
                        <Card.Title>platlist x</Card.Title>
                        <Card.Subtitle>playlist subtitle</Card.Subtitle>
                      </Card.Body>
                      <Card.Footer className="text-muted">Last updated 3 mins ago</Card.Footer>
                    </Card>
                    <Card>
                      {/* todo: add spotify playlist images */}
                      <Card.Img variant="top" src="https://picsum.photos/160/160" />
                      <Card.Body>
                        <Card.Title>platlist x</Card.Title>
                        <Card.Subtitle>playlist subtitle</Card.Subtitle>
                      </Card.Body>
                      <Card.Footer className="text-muted">Last updated 3 mins ago</Card.Footer>
                    </Card>

                  </CardGroup>
                </Card.Body>
              </Card>


              {/* Experience */}
              <Card>
                <Card.Body>
                  <Card.Title>Projects</Card.Title>
                  <CardGroup>
                    <Card>
                      {/* todo: add spotify playlist images */}
                      <Card.Img variant="top" src="https://picsum.photos/500/300" />
                      <Card.Body>
                        <Card.Title>project x</Card.Title>
                        <Card.Subtitle>short desc</Card.Subtitle>
                      </Card.Body>
                    </Card>
                    <Card>
                      {/* todo: add spotify playlist images */}
                      <Card.Img variant="top" src="https://picsum.photos/900/200" />
                      <Card.Body>
                        <Card.Title>project x</Card.Title>
                        <Card.Subtitle>short desc</Card.Subtitle>
                      </Card.Body>
                    </Card>
                    <Card>
                      {/* todo: add spotify playlist images */}
                      <Card.Img variant="top" src="https://picsum.photos/100/160" />
                      <Card.Body>
                        <Card.Title>project x</Card.Title>
                        <Card.Subtitle>short desc</Card.Subtitle>
                      </Card.Body>
                    </Card>

                  </CardGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
          </Row>
        </Container>



      </main>



    </div >
  );
}

export default About;
