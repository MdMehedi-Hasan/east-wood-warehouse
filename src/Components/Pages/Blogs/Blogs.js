import React from "react";
import {Row } from "react-bootstrap";
import BlogsCard from "../../Shared/Card/BlogsCard";
import './Blogs.css'
import image1 from '../../../images/nodejs.png'
import image2 from '../../../images/mongo.png'
import image3 from '../../../images/sql.png'
import image4 from '../../../images/jwt.png'
const Blogs = () => {
  return (
    <div className="cstm-bg">
      <div className="header d-flex justify-content-center align-items-center fw-bold fs-2">Welcome to my blog</div>
      <Row xs={1} md={2} className="container mt-5 p-5 mx-auto g-4">
        <BlogsCard title={'# Difference between javascript and nodejs'} ans={"Javascript is a scripting language whereas node.js is a opensourcee javascript runtime environment to run javascript on server-side. Besides there are much differences between these two like:Javascript can only be run on the browsers but node.js can run javascript outside the browser. Javascript is used in frontend development, node.js is used in server-side development.Javascript is a programming language & node.js is a javascript runtime environment.Javascript is an updated version of ECMA script,Nodejs is written in C, C++ and Javascript."} image={image1}></BlogsCard>
        <BlogsCard title={'# When to use nodejs and when to use mongodb'} ans={"There are two types of execution in programming.Asynchronous programming and synchronous programming. Node JS by default follows the Asynchronous pattern. Means, it does not wait for a code to be completed. Immediately, NodeJS started another job. That’s why we use nodeJS.MongoDB is the Document Oriented Database. It stores a lot of data in JSON format & it's performance is much faster. It is created to work with Large Scale Data. It can work on multiple servers. MongoDB can handle a large number of access requests easily."} image={image2}></BlogsCard>
        <BlogsCard title={'# Differences between SQL and NoSQL databases.'} ans={"SQL database are basically called relational database & NoSQL database are called non-relational database.SQL is vertically scalable whereas NoSQL is horizontaly scalable. In terms of scalability SQL increase load on a single surver and increase RAM,SSD,CPU etc. But NoSQL takes extra servers to handle traffic.SQL database are table based, NoSQL database are either key-value pairs,graph-based or wide-column based."} image={image3}></BlogsCard>
        <BlogsCard title={'# What is the purpose of jwt and how does it work'} ans={"jwt means JSON Web Token.A JWT is a Base64URL encoded string, split into three sections, delimited by periods. One is header,second is a payload & the third one is signature.It works like this:Whenever a user login to an application with username & password the server confirms his/her identity and sends back an access token containing reference to the users identity. Then the user includes the access token with every request to the server."} image={image4}></BlogsCard>
      </Row>
    </div>
  );
};

export default Blogs;
