import { Navbar, Nav, Container } from "react-bootstrap";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" varient="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/" className="text-light">
            <Navbar.Brand>MERN AUTH</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <LinkContainer to="/login" className="text-light">
                <Nav.Link>
                  <FaSignInAlt className="text-light" /> Sign In
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/register" className="text-light">
                <Nav.Link>
                  <FaSignOutAlt className="text-light" /> Sign Up
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
