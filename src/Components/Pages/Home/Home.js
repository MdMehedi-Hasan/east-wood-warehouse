import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import banner from "../../../images/f-2.png";
import Cards from "../../Shared/Card/Cards";
import './home.css'

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://afternoon-shore-78894.herokuapp.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  return (
    <div>
      <div className="cstm-background">
      </div>
      <section className="container-fluid mt-5 mb-5">
        <h1 className="text-center">Inventory</h1>
        <Row xs={1} md={2} className="container mt-5 mx-auto g-4">
          {
            products.map(product => <Cards key={product.price} details={product}></Cards>).slice(0,6)
          }
        </Row>
        <Link to="/manage">
        <button className="btn-dark rounded-pill py-1">Manage Inventory</button>
        </Link>
        
      </section>
      
    </div>
  );
};

export default Home;
