import React from "react";
import { Col, Card } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import {useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import demo from "../../../images/Background (2).png";

const Cards = ({ details }) => {
  const [user, loading, error] = useAuthState(auth);
  const {_id,image,name,description,price,quantity} = details
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
            {description} <br /> {price} <br /> {quantity}
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
