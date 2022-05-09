import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useNavigate} from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/signup.svg";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, password);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithFacebook, fbUser, fbLoading, fbError] =
    useSignInWithFacebook(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification] = useSendEmailVerification(auth);

  const handleGoogleLogin = () => {
    signInWithGoogle();
  };
  const handleFbLogin = () => {
    signInWithFacebook();
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(email, password);
    sendEmailVerification()
    e.target.reset();
  };
  if (user||gUser||fbUser) {
    navigate('/')
    // optional (you can create a modal or a component to welcome the new user then navigate to homepage)
  }
  return (
    <div style={{ minHeight: "100vh" }} className="d-flex">
      <div className="w-50 border border-1 d-flex align-items-center justify-content-center" style={{backgroundColor:'#93f50070'}}>
        <img className="w-50" src={logo} alt="" />
      </div>
      <div className="w-50 d-flex align-items-center justify-content-center ">
        <div className="w-75 border border-1 p-5">
          <h1 className="d-inline-block">
            Sign up:
            <hr />
          </h1>
          <Form className=" mx-auto" onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Your name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                onBlur={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onBlur={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <p className="text-danger">{error && error.message}</p>
            {loading && <Spinner className="d-block mx-auto mb-2" animation="border" variant="success" />}
            <Button className="w-100 bg-green text-white" type="submit">
              Sign up
            </Button>
          </Form>
          <p className="text-center">
            Already have an account?
            <Link className="text-decoration-none ms-2" to="/login">
              Log in
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
  );
};

export default Register;
