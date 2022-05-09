import './Experience.css';
import { Button, Card, Navbar, Nav, Container, Offcanvas, NavDropdown, Form, FormControl, Row, Col, Image, CardGroup } from "react-bootstrap"; //update to specifics
import "bootstrap/dist/css/bootstrap.min.css";
// import Sidebar from "../components/Sidebar.js";
import XpCard from "../components/XpCard";
// "\src\components\XpCard.js"
import React, { useState } from 'react';
import { Modal } from 'bootstrap';
import { experienceData } from '../experience';

function Xp({
  match,
  location,
  // logo,
  // company,
  // date,
  // bullets,
  // link,
}) {
  const { params: { experienceId } } = match;
  // use query strings w/ ids and json
  // const UserPage = () => {
  return (
    // match.params.userId
    <div className="Xp">
      <main>
        <div class="card">
          {/* <div class="xp-img"> */}
          {/* <img src={logo} variant="top" class="img-fluid" alt="Responsive image"> </img> */}

          <Image class="xp-img" variant="top" src={experienceData[experienceId]["logo"]}></Image>
          {/* </div> */}
          <div class="card-body">
            <h5 class="card-title">{experienceData[experienceId]["company"]}</h5>
            <div class="bullet-container">
              <div class="xp-bullets">{
                experienceData[experienceId]["bullets"].map(bullet => <p>{bullet}</p>)
              }</div>
              <div class="overlay"></div>
            </div>


            <div class="xp-footer">
              <div class="xp-footer-spacing">
                <h5>{experienceData[experienceId]["date"]}</h5>
              </div>
              <div class="xp-footer-spacing see-more">
                {experienceData[experienceId]["link"] && experienceData[experienceId]["link"] != "" && <a class="see-more" href={experienceData[experienceId]["link"]}>See More {'>'}</a>}

              </div>
            </div>

          </div>
        </div>

      </main>

    </div>
  );
}

export default Xp;