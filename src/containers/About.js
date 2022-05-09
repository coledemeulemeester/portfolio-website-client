import './About.css';
import { Card, Nav, Image, CardGroup } from "react-bootstrap"; //update to specifics
import "bootstrap/dist/css/bootstrap.min.css";
import XpCard from "../components/XpCard";
import { LinkContainer } from "react-router-bootstrap";
import { experienceData } from '../experience';

let experiences = [
  experienceData[Math.floor(Math.random() * experienceData.length)],
  experienceData[Math.floor(Math.random() * experienceData.length)],
  experienceData[Math.floor(Math.random() * experienceData.length)],
]

function About() {
  return (
    <div className="About">
      <main>
        <div class="row">
          <div class="col-12 col-md-4">
            <div class="headshot">
              <Image src="https://res.cloudinary.com/campus-job/image/upload/t_student-public-page/v1/profile_pictures/ivp3ZydAio_20220320.jpg"
                fluid
                roundedCircle >
              </Image>
            </div>

            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Fields of Interest</h5>
                <p class="card-text">Product Management</p>
                <p class="card-text">EShip</p>
                <p class="card-text">SWE</p>
                <a href="experience" class="btn btn-primary">See Experience</a>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Education</h5>
                <p class="card-text">Cornell</p>
                <p class="card-text">Andover</p>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-8">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Hello there!</h5>
                <p class="card-text">A growing engineer + lifelong adventurer. Excited by Aboutlying technology to make everyday human needs more efficient, and passionate about making everyday life more meaningful.</p>
                <p class="card-text">Product and Software experience w/ skills in human-centered design, prototyping (figma, usability testing), mvp development, full-stack (serverless, react bootstrap, python, java), mobile-dev (viper, swift).</p>
                <p class="card-text">A few of my favorite adventures so far: Skiing Der Weiße Ring (White Ring), racing on the Bonneville Salt Flats, listening to Firefly Music Festival.</p>
              </div>
            </div>

            <div class="card">
              <LinkContainer class="stretched-link" to="/music">
                <Nav.Link>
                  <div class="card-body">
                    <h5 class="card-title">Spotify</h5>
                    <div class="row">
                      <div class="col-12 col-md-4">
                        <iframe class="iframe1" src="https://open.spotify.com/embed/playlist/2V4Q4KnBI72j4sO8LTb59S?utm_source=generator" width="100%"
                          height="80" frameborder="0" allowtransparency="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                      </div>
                      <div class="col-12 col-md-4">
                        <iframe class="iframe1" src="https://open.spotify.com/embed/playlist/47c1bsZPYops5HOzfdcYRv?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                      </div>
                      <div class="col-12 col-md-4">
                        <iframe class="iframe1" src="https://open.spotify.com/embed/playlist/1iuVKv8JbIQoMe59ENkUzF?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                      </div>
                    </div>
                  </div>
                </Nav.Link>
              </LinkContainer>
            </div>

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
                        experienceId={index}
                      ></XpCard>
                    )
                  }</>
                </CardGroup>
              </Card.Body>
            </Card>
          </div>
        </div>
      </main>
    </div >
  );
}

export default About;
