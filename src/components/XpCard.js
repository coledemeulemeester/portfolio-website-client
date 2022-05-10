import { Image } from "react-bootstrap";
import './XpCard.css';
import { experienceData } from '../experience';

export default function XpCard({
  experienceId,
}) {
  return (
    <div class="card">

      <Image class="xp-img" variant="top" src={experienceData[experienceId]["logo"]}></Image>
      <div class="card-body">
        <h5 class="card-title">{experienceData[experienceId]["company"]}</h5>
        <h6>{experienceData[experienceId]["title"]}</h6>
        <h7>{experienceData[experienceId]["date"]}</h7>
        <div class="bullet-container">
          <div class="xp-bullets">{
            experienceData[experienceId]["bullets"].map(bullet => <p>{bullet}</p>)
          }</div>
          <div class="overlay"></div>
        </div>
        <a href={"experience/" + experienceId} class="stretched-link">click to read more {'>'}</a>



        <div class="xp-footer">
          <div class="xp-footer-spacing">

          </div>
          <div class="xp-footer-spacing see-more">
            {experienceData[experienceId]["link"] && experienceData[experienceId]["link"] !== "" && <a class="see-more-link" href={experienceData[experienceId]["link"]}>See Project {'>'}</a>}
          </div>
        </div>

      </div>
    </div>

  )
}