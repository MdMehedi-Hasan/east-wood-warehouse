import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import "./SingleInventory.css";
const SingleInventory = () => {
  // const [user, loading, error] = useAuthState(auth);
  const { id } = useParams();
  const [restock, setRestock] = useState(0);
  const [singlePro, setSinglePro] = useState([]);
  const [update, setUpdate] = useState()
  const { quantity } = singlePro;
  const tQuantity = parseInt(restock) + parseInt(quantity);
  const newQuantity = {tQuantity}
  console.log(quantity);

  const url = `https://afternoon-shore-78894.herokuapp.com/products/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSinglePro(data));
  }, [update]);
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
        setUpdate(!update)
      });
  };
  const handleRestock = () => {
    fetch(`http://localhost:5000/product/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newQuantity),
    })
      .then((response) => response.json())
      .then((data) => {
        setUpdate(!update)
      });
  };
  return (
    <div
      className="d-flex flex-column justify-content-center cstm-color"
      style={{ minHeight: "100vh" }}
    >
      <div className="card mb-3 cstm-card-background">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={singlePro?.image}
              className="img-fluid rounded-start h-100"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{singlePro?.name}</h5>
              <p className="card-text">Description: {singlePro?.description}</p>
              <p className="card-text">Price: ${singlePro?.price}</p>
              <p className="card-text">
                Stock:{" "}
                {singlePro?.quantity > 0 ? singlePro?.quantity : "stock out"}
              </p>
              <p className="card-text">
                Supplier: {singlePro?.supplier ? singlePro.supplier : "N/A"}
              </p>
              <button
                className="btn-green text-white border py-3 px-5 border-0 me-2"
                onClick={handleDelivered}
              >
                Delivered
              </button>
              <button
                type="button"
                className="btn-green text-white border py-3 px-5 border-0"
                onClick={handleRestock}
              >
                Restock
              </button>
              <input type="text" onChange={(e)=>setRestock(e.target.value)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleInventory;
