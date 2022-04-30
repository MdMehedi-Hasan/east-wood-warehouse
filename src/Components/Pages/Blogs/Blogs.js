import React from "react";
import {Row } from "react-bootstrap";
import BlogsCard from "../../Shared/Card/BlogsCard";
import './Blogs.css'
const Blogs = () => {
  return (
    <div>
      <div className="header d-flex justify-content-center align-items-center fw-bold fs-2">Welcome to my blog</div>
      <Row xs={1} md={2} className="container mt-5 mb-5 mx-auto g-4">
        <BlogsCard title={'# Difference between javascript and nodejs'} ans={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid sed fugit, quo dicta aspernatur voluptas ut reiciendis optio minima molestias reprehenderit sit unde adipisci saepe. Vero ex beatae cum corporis.'}></BlogsCard>
        <BlogsCard title={'# When should you use nodejs and when should you use mongodb'} ans={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid sed fugit, quo dicta aspernatur voluptas ut reiciendis optio minima molestias reprehenderit sit unde adipisci saepe. Vero ex beatae cum corporis.'}></BlogsCard>
        <BlogsCard title={'# Differences between sql and nosql databases.'} ans={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid sed fugit, quo dicta aspernatur voluptas ut reiciendis optio minima molestias reprehenderit sit unde adipisci saepe. Vero ex beatae cum corporis.'}></BlogsCard>
        <BlogsCard title={'# What is the purpose of jwt and how does it work'} ans={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid sed fugit, quo dicta aspernatur voluptas ut reiciendis optio minima molestias reprehenderit sit unde adipisci saepe. Vero ex beatae cum corporis.'}></BlogsCard>
      </Row>
    </div>
  );
};

export default Blogs;
