import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import banner from "../../../images/banner.png";
import Cards from "../../Shared/Card/Cards";


const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
  console.log(products)
  return (
    <div>
      <img width={"100%"} height={"500em"} src={banner} alt="" />
      <section className="container-fluid mt-5 mb-5">
        <h1 className="text-center">Inventory</h1>
        <Row xs={1} md={2} className="container mt-5 mx-auto g-4">
          {
            products.map(product => <Cards key={product.price}></Cards>).slice(0,6)
          }
      </Row>
      </section>
      
    </div>
  );
};

export default Home;
