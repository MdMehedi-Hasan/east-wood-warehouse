import React from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Add = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [quantity, setQuantity] = useState("");
  const [supplier, setSupplier] = useState("");
  const productsObj = {name,price,description,image,quantity,supplier,email}
  const handleCancel = (e) => {
    e.preventDefault();
  };
  const handleAdd = (e) => {
    e.preventDefault();
    fetch("https://afternoon-shore-78894.herokuapp.com/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productsObj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
    e.target.reset();
  };

  return (
    <div className="text-center">
      <form onSubmit={handleAdd} className="container row mx-auto py-4">
        <span className="col-4 me-4 text-end fs-5 fw-bold">Product name:</span>
        <input
          className="col-8 w-50 mb-3 py-2 fs-4"
          type="text"
          onBlur={(e) => setName(e.target.value)}
          required
        />
        <br />
        <span className="col-4 me-4 text-end fs-5 fw-bold">Product price:</span>
        <input
          className="col-8 w-50 mb-3 py-2 fs-4"
          type="number"
          onBlur={(e) => setPrice(e.target.value)}
          placeholder="$"
          required
        />
        <br />
        <span className="col-4 me-4 text-end fs-5 fw-bold">
          Product description:
        </span>
        <textarea
          className="col-8 w-50 mb-3 py-2 fs-4"
          onBlur={(e) => setDescription(e.target.value)}
        ></textarea>
        <br />
        <span className="col-4 me-4 text-end fs-5 fw-bold">Product image:</span>
        <input
          className="col-8 w-50 mb-3 py-2 fs-4"
          type="url"
          onBlur={(e) => setImage(e.target.value)}
          placeholder="https://"
          required
        />
        <br />
        <span className="col-4 me-4 text-end fs-5 fw-bold">
          Product quantity:
        </span>
        <input
          className="col-8 w-50 mb-3 py-2 fs-4"
          type="number"
          onBlur={(e) => setQuantity(e.target.value)}
          placeholder="00"
          required
        />
        <br />
        <span className="col-4 me-4 text-end fs-5 fw-bold">
          Product supplier:
        </span>
        <input
          className="col-8 w-50 mb-3 py-2 fs-4"
          type="text"
          onBlur={(e) => setSupplier(e.target.value)}
        />
        <br />
        <div className="d-flex justify-content-around w-75 mx-auto">
          <input
            type="submit"
            value="Add product"
            className="col-6 w-25 mt-4 btn-green text-white border-0 py-2"
          />
          <br />
          <button
            onClick={handleCancel}
            className="col-6 w-25 mt-4 btn-green text-white border-0 py-2"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
