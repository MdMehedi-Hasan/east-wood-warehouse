import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link,  useNavigate} from "react-router-dom";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

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
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} className="me-4" to="/">
                Home
              </Nav.Link>
              {user && (
                <Nav.Link as={Link} className="me-4" to="/manage">
                  Manage inventory
                </Nav.Link>
              )}
              {user && (
                <Nav.Link as={Link} className="me-4" to="/add">
                  Add inventory
                </Nav.Link>
              )}
              {user && (
                <Nav.Link as={Link} className="me-4" to="/myitems">
                  My items
                </Nav.Link>
              )}
              <Nav.Link as={Link} className="me-4" to="/blogs">
                Blogs{" "}
              </Nav.Link>
              <Nav.Link as={Link} className="me-4" to="contact">
                Contact
              </Nav.Link>
              {user ? (
                <Nav.Link onClick={handlesignOut} className="me-4">
                  Sign out
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} className="me-4" to="login">
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
