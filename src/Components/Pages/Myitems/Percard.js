import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const Percard = (props) => {
  const {_id, image, name, price, description, quantity, supplier } =
    props.item;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={image}  />
          <Card.Body>
            <Card.Title className="fw-bold"> {name}</Card.Title>
            <Card.Text>
             <span className="fw-bold">Description:</span>  {description}
            </Card.Text>
            <Card.Text>
            <span className="fw-bold">Price:</span>  ${price}
            </Card.Text>
            <Card.Text>
            <span className="fw-bold">Available stock:</span>  {quantity}
            </Card.Text>
            <Card.Text>
            <span className="fw-bold">Supplier:</span>  {supplier}
            </Card.Text>
            <Button className="btn-green py-2 px-5" onClick={()=>props.func(_id)}>Delete</Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Percard;
