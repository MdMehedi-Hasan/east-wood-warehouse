import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import "./SingleInventory.css";
const SingleInventory = () => {
  const [user, loading, error] = useAuthState(auth);
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
