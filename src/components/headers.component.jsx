import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const showRoute = (location.pathname == '/login' || location.pathname.match('/dashboard/')) ? false : true;
  
  return (
    <header className="App-header">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to={"#"} className="nav-link">
              MRTG App
            </Link>
          </Navbar.Brand>
          { showRoute ? (
            <Nav>
              <Link to={"/customers"} className="nav-link">
                Users List
              </Link>
            </Nav>
          ) : (
            ""
          )}
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
