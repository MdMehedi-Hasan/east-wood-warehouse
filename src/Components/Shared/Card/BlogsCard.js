import React from 'react';
import { Card, Col } from 'react-bootstrap';
import demo from "../../../images/Background (2).png";

const BlogsCard = (props) => {
    return (
        <div>
            <Col>
      <Card>
        <Card.Img variant="top" className="w-100" src={demo} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
           {props.ans}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default BlogsCard;