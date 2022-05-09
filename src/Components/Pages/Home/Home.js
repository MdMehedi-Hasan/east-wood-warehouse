import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cards from "../../Shared/Card/Cards";
import signature from "../../../images/signature.png";
import "./home.css";
import Accordion from "./Accordion";
import Form from "./Form";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://afternoon-shore-78894.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="cstm-background"></div>
      <section className="suppliers py-5">
        <div className="mb-3 d-flex align-items-center justify-content-center">
          <div className=" border-green me-3 w-25"></div>
          <div>
            <h1 className="text-center">Business partners</h1>
          </div>
          <div className="border-green ms-3 w-25"></div>
        </div>

        <div className="fs-1 d-flex justify-content-between bg-light p-5">
          <Icon icon="logos:behance" />
          <Icon icon="logos:ansible" />
          <Icon icon="logos:chargebee" />
          <Icon icon="logos:bash" />
          <Icon icon="logos:delighted" />
          <Icon icon="logos:vercel" />
        </div>
      </section>
      <section className="container-fluid mt-5 mb-5">
        <div className="mb-3 d-flex align-items-center justify-content-center">
          <div className="border-green me-3 w-25"></div>
          <div>
            <h1 className="text-center">Inventory products</h1>
          </div>
          <div className="border-green ms-3 w-25"></div>
        </div>
        <Row xs={1} md={2} className="container mt-5 mx-auto g-4">
          {products
            .map((product) => (
              <Cards key={product.price} details={product}></Cards>
            ))
            .slice(0, 6)}
        </Row>
        <Link to="/manage">
          <button className="bg-white text-dark fw-bold border-0 py-1 float-end">
            Manage Inventory <Icon className="fs-3" icon="bi:box-arrow-in-right" />
          </button>
        </Link>
      </section>
      <section className="values d-flex justify-content-center p-5 text-white ">
        <div className="w-50 text-center">
          <h1>OUR CORE VALUES</h1>
          <small>Written by Eastwood C.E.O</small>
          <p className="mt-5">
            Core values are the fundamental beliefs of a person or organization.
            The core values are the guiding principles that t dictate behavior
            and action. Core values can help people to know what is right from
            wrong, they can help companies to determine if they are on the right
            path and fulfilling their business goals; and they create an
            unwavering and unchanging guide. There are many different types of
            core values and many different examples of core values depending
            upon the context.
          </p>
          <img className="w-25 text-white" src={signature} alt="" />
        </div>
      </section>

      <section className="about-us py-5">
        <div className="d-flex flex-column flex-lg-row justify-content-around align-items-center">
          <div className="sm-width-75">
            <h1 className="text-center">Why us...</h1>
            <Accordion></Accordion>
          </div>
          <div >
            <h1>Be our partner</h1>
            <Form></Form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
