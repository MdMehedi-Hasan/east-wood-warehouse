import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/login.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, mailError] = useSendPasswordResetEmail(
      auth
    );

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithFacebook, fbUser, fbLoading, fbError] =
    useSignInWithFacebook(auth);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  const handleGoogleLogin = () => {
    signInWithGoogle();
  };
  const handleFbLogin = () => {
    signInWithFacebook();
  };
  const handlePassReset = async () => {
    toast('Email for reset password has sent');
    await sendPasswordResetEmail(email);
    
    }
  if (user || fbUser|| gUser) {
    navigate(from, { replace: true });
  }
 
  return (
    <div><ToastContainer />
    <div style={{ minHeight: "100vh" }} className="d-flex">
      
      <div className="w-50 border border-1 d-flex align-items-center justify-content-center" style={{backgroundColor:'#93f50070'}}>
        <img className="w-50" src={logo} alt=""/>
      </div>
      <div className="w-50 d-flex align-items-center justify-content-center ">
        <div className="w-75 border border-1 p-5">
          <h1 className="d-inline-block pb-2 mb-4 border-1 border-dark border-bottom">
            Log in
          </h1>
          <Form className=" mx-auto" onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onBlur={(e)=>setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onBlur={(e)=>setPassword(e.target.value)}
              />
            </Form.Group>
            <p className="text-danger">{error && error.message }</p>
            <Link onClick={handlePassReset} className="float-end mb-3 text-decoration-none" to="/login">Forgot password?</Link>
            {loading && <Spinner className="d-block mx-auto mb-2" animation="border" variant="success" />}
            <Button className="w-100 bg-green text-white " type="submit">
              Log in
            </Button>
          </Form>
          <p className="text-center">
            Don't have an account?
            <Link className="text-decoration-none" to="/register">
              Sign Up
            </Link>
          </p>
          <div className="text-center ">
            <Icon className="fs-1 me-4" onClick={handleGoogleLogin} icon="logos:google-icon" />
            <Icon
              onClick={handleFbLogin}
              className="text-primary fs-1"
              icon="fa6-brands:facebook"
            />
          </div>
        </div>
      </div>
      </div>
      </div>
  );
};

export default Login;
