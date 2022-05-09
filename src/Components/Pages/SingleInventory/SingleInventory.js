import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./SingleInventory.css";
const SingleInventory = () => {
  const { id } = useParams();
  const [restock, setRestock] = useState(0);
  const [singlePro, setSinglePro] = useState([]);
  const [update, setUpdate] = useState()
  const { quantity } = singlePro;
  const tQuantity = parseInt(restock) + parseInt(quantity);
  const newQuantity = {tQuantity}

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
    fetch(`https://afternoon-shore-78894.herokuapp.com/product/${id}`, {
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
                Stock:
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
              {/* ===================================== */}
            </div>
          </div>
        </div>
      </div>
      <Link to="/manage">
          <button className="bg-transparent text-dark fw-bold border-0 py-1 float-end">
            Manage Inventory <Icon className="fs-3" icon="bi:box-arrow-in-right" />
          </button>
        </Link>
    </div>
  );
};

export default SingleInventory;
