import { Card } from "react-bootstrap";
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
    <Card>
      <Card.Img variant="top" src={logo}></Card.Img>
      <Card.Body>
        <Card.Title>{company}</Card.Title>

        <div class="xp-bullets">{
          bullets.map(bullet => <p>{bullet}</p>)
        }</div>

        <div class="xp-footer">
          <a>{date}</a>
          {link && link != "" && <a class="see-more" href={link}>See More {'>'}</a>}
        </div>

      </Card.Body>
    </Card>

    /* <div class="card" style="width: 18rem;">
    <img src={img_src} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{company}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div> */
    // </div >
  )
}