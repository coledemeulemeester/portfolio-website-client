import { Image } from "react-bootstrap";
import './XpCard.css';



export default function XpCard({
  logo,
  company,
  date,
  bullets,
  link,
  // likes,
  // views,
  // actions,
}) {
  return (
    <div class="card">
      {/* <div class="xp-img"> */}
      {/* <img src={logo} variant="top" class="img-fluid" alt="Responsive image"> </img> */}

      <Image class="xp-img" variant="top" src={logo}></Image>
      {/* </div> */}
      <div class="card-body">
        <h5 class="card-title">{company}</h5>
        <div class="bullet-container">
          <div class="xp-bullets">{
            bullets.map(bullet => <p>{bullet}</p>)
          }</div>
          <div class="overlay"></div>
        </div>


        <div class="xp-footer">
          <div class="xp-footer-spacing">
            <h5>{date}</h5>
          </div>
          <div class="xp-footer-spacing see-more">
            {link && link != "" && <a class="see-more" href={link}>See More {'>'}</a>}

          </div>
        </div>

      </div>
    </div>

  )
}