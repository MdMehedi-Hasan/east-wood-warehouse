import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import "./SingleInventory.css";
const SingleInventory = () => {
  const [user, loading, error] = useAuthState(auth);
  const { id } = useParams();
  const [singlePro, setSinglePro] = useState();
  const url = `http://localhost:5000/products/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSinglePro(data));
  }, [singlePro]);
  const handleDelivered = () => {
    
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(singlePro),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log("Success:", data);        
      })
  };  
  return (
    <div style={{ minHeight: "100vh" }}>
      <div>
        <img src={singlePro?.image} alt="" />
        <p>{singlePro?.name}</p>
        <p>{singlePro?.description}</p>
        <p>{singlePro?.quantity}</p>
        <button className="btn-primary" onClick={handleDelivered}>
          Delivered
        </button>
      </div>
    </div>
  );
};

export default SingleInventory;
