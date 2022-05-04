import React from "react";
import { Col, Card } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import {useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import demo from "../../../images/Background (2).png";

const Cards = ({ details }) => {
  const [user, loading, error] = useAuthState(auth);
  const {_id,image,name,description,price} = details
  const navigate = useNavigate()
  const productDetails = (id) => {
    navigate(`/products/${id}`);
  }
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
           <button onClick={()=>productDetails(_id)}>Manage</button>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Cards;
