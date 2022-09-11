import React from "react";
import { Nav, Navbar, Container} from "react-bootstrap";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="App-header">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to={"#"} className="nav-link">
              React MRTG app
            </Link>
          </Navbar.Brand>

          {/* <Nav className="justify-content-end">
            <Nav>
              <Link to={"/customers/add"} className="nav-link">
                Create New User
              </Link>
            </Nav> */}

            <Nav>
              <Link to={"/customers"} className="nav-link">
                Users List
              </Link>
            </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
