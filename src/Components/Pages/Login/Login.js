import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/login.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithFacebook, fbUser, fbLoading, fbError] =
    useSignInWithFacebook(auth);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setEmail(e.target.email.value);
    setPassword(e.target.password.value);
    signInWithEmailAndPassword(email, password);
  };

  const handleGoogleLogin = () => {
    signInWithGoogle();
  };
  const handleFbLogin = () => {
    signInWithFacebook();
  };

  // console.log(email,password,error)
  return (
    <div style={{ minHeight: "100vh" }} className="d-flex">
      <div className="w-50 border border-1 d-flex align-items-center justify-content-center bg-warning">
        <img className="w-50" src={logo} />
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
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Group>
            <p className="text-end">Forget password</p>
            <Button className="w-100" variant="primary" type="submit">
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
            <Icon onClick={handleGoogleLogin} icon="logos:google-icon" />
            <Icon
              onClick={handleFbLogin}
              className="text-primary"
              icon="fa6-brands:facebook"
            />
            <Icon icon="logos:github-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
