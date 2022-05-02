import { Card } from "react-bootstrap";


export default function XpCard({
  img_src,
  company,
  date,
  bullets,
  // likes,
  // views,
  // actions,
}) {
  return (
    <Card>
      <Card.Img variant="top" src={img_src}></Card.Img>
      <Card.Body>
        <Card.Title>{company}</Card.Title>
        <Card.Subtitle>{date}</Card.Subtitle>
        <>{
          bullets.map(bullet => <Card.Text>{bullet}</Card.Text>)
        }</>
      </Card.Body>
    </Card>
  )
}