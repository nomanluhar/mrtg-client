import React, { useState } from "react";
import { Navigate } from "react-router-dom";

import { onAddCustomers } from "../../../api/api";
// import Modal from "react-bootstrap/Modal";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

const initialState = {
  full_name: "",
  email: "",
  user_name: "",
  password: "",
};

const UserAdd = () => {
  const [values, setValues] = useState({
    full_name: '',
    email: '',
    user_name: '',
    password: '',
    user_type: 'customer'
  });

  const [error, setError] = useState(false);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }


  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await onAddCustomers(values);
      console.log(response)
      return <> <Navigate to='/customers' /> </>
    } catch (error) {
      console.log(error)
      setError(error.response.data.errors[0].msg);
    }
  }



  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">ADD A USER</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <input type='hidden' name="id" />
          <div className="form-group">
            <input
              type="text"
              id="full_name"
              className="form-control form-control-lg"
              name="full_name"
              placeholder="Full Name"
              value={values.full_name}
              onChange={(e) => onChange(e)}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              id="email"
              className="form-control form-control-lg"
              name="email"
              placeholder="E-Mail"
              value={values.email}
              onChange={(e) => onChange(e)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              id="User_name"
              name="user_name"
              placeholder="User Name"
              value={values.user_name}
              onChange={(e) => onChange(e)}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control form-control-lg"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={(e) => onChange(e)}
            />
          </div>

          <button type="submit" className="btnSubmit">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserAdd;
