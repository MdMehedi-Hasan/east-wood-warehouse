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
          <Navbar.Brand as={Link} to="/" className="text-dark fw-bold">East<span className="text-color-green">wood</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} className="me-4 text-dark hover fw-bold" to="/">
                Home
              </Nav.Link>
              {user && (
                <Nav.Link as={Link} className="me-4 text-dark hover fw-bold" to="/manage">
                  Manage inventory
                </Nav.Link>
              )}
              {user && (
                <Nav.Link as={Link} className="me-4 text-dark hover fw-bold" to="/add">
                  Add inventory
                </Nav.Link>
              )}
              {user && (
                <Nav.Link as={Link} className="me-4 text-dark hover fw-bold" to="/myitems">
                  My items
                </Nav.Link>
              )}
              <Nav.Link as={Link} className="me-4 text-dark hover fw-bold" to="/blogs">
                Blogs{" "}
              </Nav.Link>
              {/* <Nav.Link as={Link} className="me-4 text-dark hover" to="contact">
                Contact
              </Nav.Link> */}
              {/* for future use */}
              {user ? (
                <Nav.Link onClick={handlesignOut} className="me-4 text-dark hover fw-bold">
                  Sign out
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} className="me-4 text-dark hover fw-bold" to="login">
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
