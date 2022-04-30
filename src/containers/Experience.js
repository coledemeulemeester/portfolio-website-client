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
          {/* COL 1 */}
          <Col>
            {/* Juni */}
            <Card>
              <Card.Img variant="top" src="https://junilearning.com/static/juni_logo_preview-101e7872d58e53d7323d24502e7ff973.png"></Card.Img>
              <Card.Body>
                <Card.Title>Juni Learning</Card.Title>
                <Card.Subtitle>Jun 2019 - May 2021 </Card.Subtitle>
                <Card.Text>▪ Overhauled instructor recruitment process by designing top-of-funnel recruitment strategy, leading campus ambassador
                  initiative, advising recruitment pipeline project, reaching 10,000+ prospective instructors, directly hiring 100+ instructors
                  and reducing total interview timeline by 50+%, respectively</Card.Text>
                <Card.Text>▪ Interviewed 12 Juni and non-Juni affiliated instructors, analyzed 1,100+ instructor applications and researched 90+ target
                  universities to identify competitive advantages, pipeline bottlenecks and target instructor saturation</Card.Text>
                <Card.Text>▪ Project-managed and hosted fall open house reaching 200 prospective parent families within first 3 events and coordinated
                  Marketing, Sales, Curriculum subteams while interfacing directly with CEO, CTO and COO</Card.Text>
                <Card.Text>▪ Interviewed 40+ instructor applicants and virtually taught 100+ students in private and small group classrooms, connecting
                  with diverse personalities and learning styles to convey course content and foster community when possible
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Titan Analytics */}
            <Card>
              <Card.Img variant="top" src="https://media-exp1.licdn.com/dms/image/C4E0BAQF2MBakfINYoA/company-logo_200_200/0/1552077966495?e=2147483647&v=beta&t=zr3LDD46sfzqdo1Xaos5LIBm1ATS_0BO4tEQu65ApuA"></Card.Img>
              <Card.Body>
                <Card.Title>Titan Analytics</Card.Title>
                <Card.Subtitle>Sep 2018 - Sep 2019</Card.Subtitle>
                <Card.Text>▪ Led Software and Data subteams in developing an MVP insights dashboard that allows high school football coaches to save dozens of hours understanding and analyzing opponent's play-calling tendencies </Card.Text>
                <Card.Text>▪ Interpreted coaches' feedback and followed Scrum and Agile development methods to lead team in building prototypes using Google Data Studio and Python</Card.Text>
                <Card.Text>▪ Interpreted an NFL dataset of over 42,000 plays using SQL, Python and Pandas; plotted each player's production under 25 distinct criteria using Matplotlib; and scored every receiver’s efficiency during the 2018 season</Card.Text>
              </Card.Body>
            </Card>

          </Col>

          {/* COL 2 */}
          <Col>
            {/* Ridgeline */}
            <Card>
              <Card.Img variant="top" src="https://global-uploads.webflow.com/6126ab68c73f925bdc355c97/619ce9b385a3c90b19d7c640_Logo.svg"></Card.Img>
              <Card.Body>
                <Card.Title>Ridgeline</Card.Title>
                <Card.Subtitle>Jun 2021 - Aug 2021 </Card.Subtitle>
                <Card.Text>▪ Designed and developed go-live, full-stack feature enabling automated retrieval of external emails and internal CRM logging</Card.Text>
                <Card.Text>▪ Designed core data model leveraging NoSQL architecture to index across 8 unique fields and scale for millions of entries</Card.Text>
                <Card.Text>▪ Implemented back-end APIs in Python and front-end webpages using React for users to interface with email data</Card.Text>
              </Card.Body>
            </Card>

          </Col>


          {/* COL 3 */}
          <Col>
            {/* Golden Bees */}
            <Card>
              <Card.Img variant="top" src="http://goldenbeesltd.com/wp-content/uploads/2021/07/cropped-IMG-20210706-WA0016.jpg"></Card.Img>
              <Card.Body>
                <Card.Title>Golden Bees</Card.Title>
                <Card.Subtitle>Oct 2019 - Mar 2020</Card.Subtitle>
                <Card.Text>▪ Analyzed field-research to present branding and packaging revisions, production protocols and supply tracking recommendations to Golden Bees' leadership</Card.Text>
                <Card.Text>▪ Conducted 120 surveys and interviews with end-consumers, stakeholders and policy makers about honey consumption habits, benefit to Ugandan supply chain and challenges to the production and supply chain</Card.Text>
                <Card.Text>▪ Secured 3 verbal agreements to strategic partnerships with a high-end restaurant, tourism agency and the Uganda Wildlife Authority to carry Golden Bees' products and promote Golden Bees' brand</Card.Text>
              </Card.Body>
            </Card>

            {/* TEMPLATE */}
            <Card>
              <Card.Img variant="top" src="https://picsum.photos/300/300"></Card.Img>
              <Card.Body>
                <Card.Title>Example</Card.Title>
                <Card.Subtitle>Mon 2019 - Mon 2020</Card.Subtitle>
                <Card.Text></Card.Text>
                <Card.Text></Card.Text>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>


    </div>
  );
}

export default Experience;
