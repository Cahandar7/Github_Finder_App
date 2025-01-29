import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SingleCard = ({ image, title, desc, url }) => {
  return (
    <Col sm="12" md="3">
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <a href={url} className="btn btn-dark">
            Go Profile
          </a>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleCard;
