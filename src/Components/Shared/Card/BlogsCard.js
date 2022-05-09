import React from 'react';
import { Card, Col } from 'react-bootstrap';

const BlogsCard = (props) => {
    return (
        <div>
            <Col>
      <Card>
        <Card.Img style={{height:'200px'}} variant="top" className="w-100 mx-auto" src={props?.image} />
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