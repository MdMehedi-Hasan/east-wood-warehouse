import React from "react";
import { Col, Card } from "react-bootstrap";
import demo from "../../../images/Background (2).png";

const Cards = () => {
  return (
    <Col>
      <Card>
        <Card.Img variant="top" className="w-50" src={demo} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Footer className="bg-white border-0">
            <button>Learn more</button>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Cards;
