import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./SingleInventory.css";
const SingleInventory = () => {
  const { id } = useParams();
  const [singlePro, setSinglePro] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setSinglePro(data));
  }, []);
  return (
    <div>
      <div>
        <img src={singlePro?.image} alt="" />
        <p>{singlePro?.name}</p>
        <p>{singlePro?.description}</p>
        <p>{singlePro?.stock}</p>
        <button className="btn-primary">Delivered</button>
      </div>
    </div>
  );
};

export default SingleInventory;
