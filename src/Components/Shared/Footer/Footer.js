import { Icon } from "@iconify/react";
import React from "react";
import playStore from '../../../images/g-store.png'
import appStore from '../../../images/app-store.png'

const Footer = () => {
  return (
    <div className="text-white bg-dark p-4 container-fluid">
      <div className="row">
        <div className="col-md-6 col-sm-12 col-lg-4">
       <h1 >East<span className="text-green">wood</span></h1> 
       <h5 className="mt-5">Find more</h5>
       <div className="bg-white w-75 rounded-pill ">
       <input style={{outline:'none'}} className="border border-0 w-75 rounded-pill text-center" type="text" />
       <button className="text-dark border-0 w-25 rounded-pill py-2">Search</button>
       </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-2">
            <h4>Useful links</h4>
            <ul className="list-unstyled">
            <li>Home</li>          
            <li>Blogs</li>          
            <li>Contact</li>          
            <li>Query</li>          
            <li>Faq</li>          
            <li>Admin</li>                   
            </ul>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-2">
        <h4>Admin</h4>
            <ul className="list-unstyled">
            <li>Manage inventory</li>          
            <li>Add inventory</li>          
            <li>Added items</li>                   
            <li>Sign out</li>                   
            </ul>
        </div>
        <div className="col-md-6 col-sm-12 col-lg-2">
                  <h4 className="text-center">Contact Us</h4> 
                  <ul className="d-flex list-unstyled justify-content-around">
                      <li><Icon className="fs-3" icon="akar-icons:google-fill" /></li>
                      <li><Icon className="fs-3" icon="bi:facebook" /></li>
                      <li><Icon className="fs-3" icon="cib:twitter" /></li>
                  </ul>
            </div>
        <div className="col-md-6 col-sm-12 col-lg-2">
            <h4 className="text-center">Get the app</h4>
            <ul className="list-unstyled text-center">
                <li> <img width={'60%'} src={playStore} alt="" /> </li>
                <li> <img className="mt-2" width={'60%'} src={appStore} alt="" /> </li>
            </ul>
        </div>
        <div className="col-md-12 mt-5 text-center">
          All rights reserved &copy; 2020 &mdash; {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
};

export default Footer;
