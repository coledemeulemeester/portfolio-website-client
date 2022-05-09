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
                <div class="media position-relative">
                  <div class="seal">
                    <Image id="seal1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Cornell_University_seal.svg/1200px-Cornell_University_seal.svg.png" />

                  </div>
                  <div class="media-body">
                    <p>Cornell University</p>
                    <p>B.S. Computer Science</p>
                    <p>2018 - 2022</p>
                  </div>
                </div>
                <div class="media position-relative">
                  <div class="seal">
                    <Image id="seal2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Phillips_Academy_seal.svg/1200px-Phillips_Academy_seal.svg.png" />

                  </div>
                  <div class="media-body">
                    <p>Phillips Academy Andover</p>
                    <p>2014 - 2018</p>
                  </div>
                </div>
              </div>

            </div>
          </div>





          <div class="col-12 col-md-8">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Hello there!</h5>
                <p class="card-text">My name is Cole DeMeulemeester, and I'm growing engineer + lifelong adventurer. </p>
                <p class="card-text">Excited by Aboutlying technology to make everyday human needs more efficient, and passionate about making everyday life more meaningful.</p>
                <p class="card-text">Product and Software experience w/ skills in human-centered design, prototyping (figma, usability testing), mvp development, full-stack (serverless, react bootstrap, python, java), mobile-dev (viper, swift).</p>
                <p class="card-text">A few of my favorite adventures so far: Skiing Der Weiße Ring (White Ring), racing on the Bonneville Salt Flats, listening to Firefly Music Festival.</p>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Spotify</h5>
                <p>A few currations to encapsulate one of my favorite hobbies</p>
                <div class="row">
                  <div class="col-12 col-md-4">
                    <iframe class="iframe1" src="https://open.spotify.com/embed/playlist/2V4Q4KnBI72j4sO8LTb59S?utm_source=generator" width="100%"
                      height="80" frameborder="0" allowtransparency="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                    <p>right here, right now</p>
                  </div>
                  <div class="col-12 col-md-4">
                    <iframe class="iframe1" src="https://open.spotify.com/embed/playlist/47c1bsZPYops5HOzfdcYRv?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                    <p>sounds to get the juice flowing</p>
                  </div>
                  <div class="col-12 col-md-4">
                    <iframe class="iframe1" src="https://open.spotify.com/embed/playlist/1iuVKv8JbIQoMe59ENkUzF?utm_source=generator" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                    <p>~alternative vibes~</p>
                  </div>
                </div>
              </div>
              <a href={"music"} class="stretched-link"></a>
            </div>

            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Projects</h5>
                <div class="card-group">
                  <>{
                    experiences.map((experience, index) =>
                      <XpCard
                        experienceId={index}
                      ></XpCard>
                    )
                  }</>
                </div>
              </div>
              <a href={"experience"} class="stretched-link"></a>
            </div>
          </div>
        </div>
      </main>
    </div >
  );
}

export default About;
