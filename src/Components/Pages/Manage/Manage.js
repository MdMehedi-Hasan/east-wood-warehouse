import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TableRow from "../Table/TableRow";

const Manage = () => {
  const navigate = useNavigate()
  const [productDetails, setProductDetails] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProductDetails(data));
  }, []);
  const addNewItem = () => {
    navigate('/add');
  }
// console.log(productDetails)
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        const restProducts = productDetails.filter(products => products._id !== id);
        setProductDetails(restProducts);
        console.log("Success:", data);
      })
  }
  // console.log(productDetails)
  return (
      <div style={{minHeight:'100vh'}}>
          <Table striped bordered hover responsive="md">
        <thead>
          <tr>
            <th className="text-center">Product </th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th className="text-center">Delete Stock</th>
          </tr>
        </thead>
        <tbody>
                  {
                      productDetails.map(products =><TableRow key={products._id} details={products} func={()=>handleDelete(products._id)}></TableRow>)
                  }       
        </tbody>
      </Table>
      <button className="btn-dark" onClick={addNewItem}>Add new item</button> 
    </div>
  );
};

export default Manage;
