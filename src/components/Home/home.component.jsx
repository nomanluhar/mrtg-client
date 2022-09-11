import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="mb-2">
        <Link to="/superadmin/login">
          <Button variant="primary" size="lg">
            Super Admin login
          </Button>{" "}
        </Link>
      </div>

      <div className="mb-2">
        <Link to="/dashboard/login">
          <Button variant="primary" size="lg">
            User login
          </Button>{" "}
        </Link>
      </div>
    </>
  );
};

export default Home;