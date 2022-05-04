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
  return (
      <div>
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
        <tbody  style={{ backgroundImage: 'url("https://contentgrid.thdstatic.com/hdus/en_US/DTCCOMNEW/fetch/NexGen/ContentPage/HDH20-Furniture-Sofas-VizNav.jpg")', backgroundRepeat: 'no-repeat'}}>
                  {
                      productDetails.map(products => <TableRow key={products._id} details={products}></TableRow>)
                  }       
        </tbody>
      </Table>
      <button className="btn-dark" onClick={addNewItem}>Add new item</button> 
    </div>
  );
};

export default Manage;
