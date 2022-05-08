import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import "./SingleInventory.css";
const SingleInventory = () => {
  const [user, loading, error] = useAuthState(auth);
  const { id } = useParams();
  const [restock, setRestock] = useState();
  console.log(restock)
  const [singlePro, setSinglePro] = useState();


  const url = `https://afternoon-shore-78894.herokuapp.com/products/${id}`;
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
      .then((data) => {});
  };
  const handleRestock = () => {
    fetch(`https://afternoon-shore-78894.herokuapp.com/product/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(singlePro, singlePro.quantity=parseInt(singlePro.quantity)+parseInt(restock)),
    })
      .then((response) => response.json())
      .then((data) => {
        // singlePro.quantity=singlePro.quantity+restock
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
              <p className="card-text">Stock: {singlePro?.quantity>0 ? singlePro?.productQnt:"stock out"}</p>
              <p className="card-text">
                Supplier: {singlePro?.supplier ? singlePro.supplier : "N/A"}
              </p>
              <button
                className="btn-green text-white border py-3 px-5 border-0 me-2"
                onClick={handleDelivered}
              >
                Delivered
              </button>
              {/* Button trigger modal */}
              <button
                type="button"
                className="btn-green text-white border py-3 px-5 border-0"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Restock
              </button>

              {/* <!-- Modal --> */}
              <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel">
                        Eastwood
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <input onChange={(e)=>setRestock(e.target.value)} className="w-100" type="number"/>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-danger"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" className="btn btn-green" data-bs-dismiss="modal" onClick={handleRestock}>
                       Restock
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* ============================= */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleInventory;
