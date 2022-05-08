import React from "react";
import { Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Cards = ({ details }) => {
  const {_id,image,name,description,price,quantity,supplier} = details
  const navigate = useNavigate()
  const productDetails = (id) => {
    navigate(`/products/${id}`);
  }
  return (
    <Col>
      <Card>
        <Card.Img variant="top" className="w-50" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description} <br /> {price} <br /> {quantity} <br /> {supplier}
          </Card.Text>
          <Card.Footer className="bg-white border-0">
           <button onClick={()=>productDetails(_id)}>Manage</button>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Cards;
