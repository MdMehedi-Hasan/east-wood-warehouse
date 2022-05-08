import React from "react";
import { Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './card.css'

const Cards = ({ details }) => {
  const { _id, image, name, description, price, quantity, supplier } = details;
  const navigate = useNavigate();
  const productDetails = (id) => {
    navigate(`/products/${id}`);
  };
  return (
    <Col>
      <Card className="box-shadow">
        <Card.Img variant="top" className="w-100" height={'400px'} src={image} />
        <Card.Body>
          <Card.Title> <span className="fw-bold text-green"> Product Name:</span> {name}</Card.Title>
          <Card.Text><span className="fw-bold text-green"> Description:</span>{description}</Card.Text>
          <Card.Text><span className="fw-bold text-green"> Price:</span> ${price}</Card.Text>
          <Card.Text><span className="fw-bold text-green"> Stock:</span> {quantity < 0 ? "Stock out" : quantity}</Card.Text>
          <Card.Text><span className="fw-bold text-green"> Distributor:</span>{supplier}</Card.Text>

          <button
            className="btn bg-green text-white py-2 px-5"
            onClick={() => productDetails(_id)}
          >
            Manage
          </button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Cards;
