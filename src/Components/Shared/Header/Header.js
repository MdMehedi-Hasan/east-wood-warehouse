import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link,  useNavigate} from "react-router-dom";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import './header.css'

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const handlesignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        
      });
  };

  return (
    <div className="header-nav">
      <Navbar collapseOnSelect expand="lg" >
        <Container>
          <Navbar.Brand as={Link} to="/" className="text-dark">East<span className="text-color-green">wood</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} className="me-4 text-dark hover" to="/">
                Home
              </Nav.Link>
              {user && (
                <Nav.Link as={Link} className="me-4 text-dark hover" to="/manage">
                  Manage inventory
                </Nav.Link>
              )}
              {user && (
                <Nav.Link as={Link} className="me-4 text-dark hover" to="/add">
                  Add inventory
                </Nav.Link>
              )}
              {user && (
                <Nav.Link as={Link} className="me-4 text-dark hover" to="/myitems">
                  My items
                </Nav.Link>
              )}
              <Nav.Link as={Link} className="me-4 text-dark hover" to="/blogs">
                Blogs{" "}
              </Nav.Link>
              <Nav.Link as={Link} className="me-4 text-dark hover" to="contact">
                Contact
              </Nav.Link>
              {user ? (
                <Nav.Link onClick={handlesignOut} className="me-4 text-dark hover">
                  Sign out
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} className="me-4 text-dark hover" to="login">
                  Log in
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
