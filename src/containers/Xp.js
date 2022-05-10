import { Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { experienceData } from '../experience';
import './Xp.css';

function Xp({
  match,
  location,
}) {
  const { params: { experienceId } } = match;
  return (
    <div className="Xp">
      <main>
        <div>
          <div class="row xp-header">
            <div class="col-6 col-md-4">
              <Image src={experienceData[experienceId]["logo"]}></Image>

            </div>
            <div class="col-6 col-md-8">
              <h5 class="card-title">{experienceData[experienceId]["company"]}</h5>
              <h6>{experienceData[experienceId]["title"]}</h6>
              <h7>{experienceData[experienceId]["date"]}</h7>
            </div>
          </div>
          <div >

            <div>{
              experienceData[experienceId]["bullets"].map(bullet => <ul>{bullet}</ul>)
            }</div>



            <div class="xp-footer">
              <div class="xp-footer-spacing">

              </div>
              <div class="xp-footer-spacing see-more">
                {experienceData[experienceId]["link"] && experienceData[experienceId]["link"] !== "" && <a class="see-more" href={experienceData[experienceId]["link"]}>See Project {'>'}</a>}

              </div>
            </div>

          </div>
        </div>

      </main >

    </div >
  );
}

export default Xp;