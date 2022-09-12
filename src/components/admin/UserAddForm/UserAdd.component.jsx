import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { onAddCustomers } from "../../../api/api";
// import Modal from "react-bootstrap/Modal";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

const UserAdd = () => {
  const [values, setValues] = useState({
    _id: "",
    full_name: "",
    email: "",
    user_name: "",
    password: "",
    user_type: "customer",
  });

  const initialStateForArray = [{ name: "", MRTG_URL: "" }];

  const [mrtgValue, setMrtgValue] = useState(initialStateForArray);

  const handleChange = (i, e) => {
    let newMrtgValues = [...mrtgValue];
    newMrtgValues[i][e.target.name] = e.target.value;
    setMrtgValue(newMrtgValues);
  };

  const addFormFields = () => {
    setMrtgValue([...mrtgValue, { name: "", MRTG_URL: "" }]);
  };

  const removeFormFields = (i) => {
    let newMrtgValues = [...mrtgValue];
    newMrtgValues.splice(i, 1);
    setMrtgValue(newMrtgValues);
  };

  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await onAddCustomers(values);
      navigate("/customers");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">ADD A USER</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div>
            <label className="form-label">Full Name:</label>
            <input
              type="text"
              id="full_name"
              className="form-control"
              name="full_name"
              placeholder="Full Name"
              value={values.full_name}
              onChange={(e) => onChange(e)}
            />
          </div>

          <div>
            <label className="form-label">Email:</label>
            <input
              type="email"
              id="email"
              className="form-control"
              name="email"
              placeholder="E-Mail"
              value={values.email}
              onChange={(e) => onChange(e)}
            />
          </div>

          <div>
            <label className="form-label">User Name:</label>
            <input
              type="text"
              className="form-control"
              id="User_name"
              name="user_name"
              placeholder="User Name"
              value={values.user_name}
              onChange={(e) => onChange(e)}
            />
          </div>

          <div>
            <label className="form-label">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={(e) => onChange(e)}
            />
          </div>
          <h2 className="text-center mb-4">MRTG INFO</h2>
          <div className="form-group">
            {mrtgValue.map((element, index) => (
              <div className="form-inline" key={index}>
                <label className="form-label">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="MRTG Name"
                  value={element.name || ""}
                  onChange={(e) => handleChange(index, e)}
                  required
                />
                <label>URL:</label>
                <input
                  type="url"
                  id="url"
                  name="url"
                  value={element.url || ""}
                  onChange={(e) => handleChange(index, e)}
                  required
                />
                {index ? (
                  <button
                    type="button"
                    className="btn btn-sm btn-secondary"
                    onClick={() => removeFormFields(index)}
                  >
                    Remove
                  </button>
                ) : null}

                <button
                  className="btn btn-sm btn-dark"
                  type="button"
                  onClick={() => addFormFields()}
                >
                  Add More
                </button>
              </div>
            ))}
          </div>

          <div style={{ color: "red", margin: "10px 0" }}>{error}</div>
          <button className="btn btn-primary">Add</button>
        </form>
      </div>
    </div>
  );
};

export default UserAdd;
