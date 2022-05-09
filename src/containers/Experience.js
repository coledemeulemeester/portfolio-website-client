import './Experience.css';
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import XpCard from "../components/XpCard";
import { experienceData } from '../experience';

function Experience() {
  let lenExp = Math.floor(experienceData.length / 3);
  let experiences1 = experienceData.slice(0, lenExp);
  let experiences2 = experienceData.slice(lenExp, 2 * lenExp);
  let experiences3 = experienceData.slice(2 * lenExp);

  return (
    <div className="Experience">
      <Container>
        <div class="row">
          <div class="col-12 col-md-4 stdstyle">
            <>{
              experiences1.map((experience, index) =>
                <XpCard
                  experienceId={index}
                ></XpCard>
              )
            }</>
          </div>
          <div class="col-12 col-md-4 stdstyle">
            <>{
              experiences2.map((experience, index) =>
                <XpCard
                  experienceId={index + lenExp}
                ></XpCard>
              )
            }</>
          </div>
          <div class="col-12 col-md-4 stdstyle">
            <>{
              experiences3.map((experience, index) =>
                <XpCard
                  experienceId={index + 2 * lenExp}
                ></XpCard>
              )
            }</>
          </div>
        </div>
      </Container >
    </div >
  );
}

export default Experience;
