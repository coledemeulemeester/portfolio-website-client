import './About.css';
import { Button, Card, Navbar, Nav, Container, Offcanvas, NavDropdown, Form, FormControl, Row, Col, Image, CardGroup } from "react-bootstrap"; //update to specifics
import "bootstrap/dist/css/bootstrap.min.css";
import XpCard from "../components/XpCard";
import { LinkContainer } from "react-router-bootstrap";

// import RateMyMajorPoster from '../assets/RateMyMajorPoster.svg'

// import Sidebar from "../components/Sidebar.js";

let experiences = [

  {
    "company": "RateMyMajor",
    "link": "https://www.figma.com/proto/lmxQQOFHFgWufxP8pBdtfd/HCI-Group-14?node-id=327%3A25472&scaling=min-zoom&page-id=327%3A12030&starting-point-node-id=327%3A25472",
    "date": "Oct 2020 - Dec 2020",
    "title": "Product Designer, User Researcher",
    "logo": "",
    "bullets": [
      "Human Computer Interaction final project",
      "- 1st Place Final Project (\"The Shut-Up-And-Take-My-Money Award\")",
      "- Collaborated with Jalil Evans, Julia Kelly, and Veronica Wertz",
      "",
    ],
  },

  {
    "company": "Juni Learning",
    "link": "",
    "date": "Jun 2019 - May 2021",
    "title": "Product & Business Development Associate",
    "logo": "https://junilearning.com/static/juni_logo_preview-101e7872d58e53d7323d24502e7ff973.png",
    "bullets": [
      "▪ Overhauled instructor recruitment process by designing top-of-funnel recruitment strategy, leading campus ambassador initiative, advising recruitment pipeline project, reaching 10,000+ prospective instructors, directly hiring 100+ instructors and reducing total interview timeline by 50+%, respectively",
      "▪ Interviewed 12 Juni and non-Juni affiliated instructors, analyzed 1,100+ instructor applications and researched 90+ target universities to identify competitive advantages, pipeline bottlenecks and target instructor saturation",
      "▪ Project-managed and hosted fall open house reaching 200 prospective parent families within first 3 events and coordinated Marketing, Sales, Curriculum subteams while interfacing directly with CEO, CTO and COO",
      "▪ Interviewed 40+ instructor applicants and virtually taught 100+ students in private and small group classrooms, connecting with diverse personalities and learning styles to convey course content and foster community when possible",
    ],
  },

  {
    "company": "Ridgeline",
    "link": "",
    "date": "Jun 2021 - Aug 2021",
    "title": "Product Engineer Intern",
    "logo": "https://global-uploads.webflow.com/6126ab68c73f925bdc355c97/619ce9b385a3c90b19d7c640_Logo.svg",
    "bullets": [
      "▪ Designed and developed go-live, full-stack feature enabling automated retrieval of external emails and internal CRM logging",
      "▪ Designed core data model leveraging NoSQL architecture to index across 8 unique fields and scale for millions of entries",
      "▪ Implemented back-end APIs in Python and front-end webpages using React for users to interface with email data",
      "",
    ],
  },

];

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
              <Card>
                <Image src="https://res.cloudinary.com/campus-job/image/upload/t_student-public-page/v1/profile_pictures/ivp3ZydAio_20220320.jpg"
                  fluid
                  roundedCircle >
                </Image>
              </Card>

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
                  {/* (what am, what want...) */}
                  <Card.Text>A growing engineer + lifelong adventurer. Excited by Aboutlying technology to make everyday human needs more efficient, and passionate about making everyday life more meaningful.</Card.Text>
                  {/* (ACOLADES) */}
                  <Card.Text> Product and Software experience w/ skills in human-centered design, prototyping (figma, usability testing), mvp development, full-stack (serverless, react bootstrap, python, java), mobile-dev (viper, swift).</Card.Text>
                  {/* (fun)  */}
                  <Card.Text>A few of my favorite adventures so far: Skiing Der Weiße Ring (White Ring), racing on the Bonneville Salt Flats, listening to Firefly Music Festival.</Card.Text>
                </Card.Body>
              </Card>

              {/* Music */}

              <LinkContainer class="stretched-link" to="/music">
                <Nav.Link>
                  <Card>
                    <Card.Body>
                      <Card.Title>Spotify</Card.Title>
                      <CardGroup>
                        <Card>
                          <iframe class="iframe1" src="https://open.spotify.com/embed/playlist/2V4Q4KnBI72j4sO8LTb59S?utm_source=generator" width="100%"
                            height="80" frameborder="0" allowtransparency="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                          {/* <Card.Body>
                        <Card.Title>rh rn</Card.Title>
                        <Card.Subtitle>right here, right now</Card.Subtitle>
                      </Card.Body>
                      <Card.Footer className="text-muted">Last updated 3 mins ago</Card.Footer> */}
                        </Card>
                        <Card>
                          <iframe class="iframe1" src="https://open.spotify.com/embed/playlist/47c1bsZPYops5HOzfdcYRv?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                        </Card>
                        <Card>
                          <iframe class="iframe1" src="https://open.spotify.com/embed/playlist/1iuVKv8JbIQoMe59ENkUzF?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                        </Card>
                      </CardGroup>
                    </Card.Body>
                  </Card>
                </Nav.Link>
              </LinkContainer>


              {/* Experience */}

              <Card>

                <Card.Body>
                  <LinkContainer class="stretched-link" to="/experience">
                    <Nav.Link>
                      <Card.Title>Projects</Card.Title>
                    </Nav.Link>
                  </LinkContainer>
                  <CardGroup>
                    <>{
                      experiences.map((experience, index) =>
                        <XpCard
                          logo={experience["logo"]}
                          company={experience["company"]}
                          date={experience["date"]}
                          bullets={experience["bullets"]}
                          link={experience["link"]}
                        ></XpCard>
                      )
                    }</>
                  </CardGroup>
                </Card.Body>

              </Card>

            </Col>
          </Row>
        </Container>



      </main>



    </div >
  );
}

export default About;
