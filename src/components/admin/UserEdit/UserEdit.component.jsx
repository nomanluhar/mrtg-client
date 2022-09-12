import React from "react";
import { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { fetchSingleCustomer, onEditCustomer } from "../../../api/api";

const EditUser = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const initialState = {
    full_name: "",
    email: "",
    user_name: "",
    password: "",
    user_type: "customer",
  };
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(false);
  const loadOneCustomer = async () => {
    const response = await fetchSingleCustomer(id);
    setValues(response?.data?.customer);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    try {
      loadOneCustomer();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await onEditCustomer(values);
      navigate('/customers');
    } catch (error) {
      console.log(error)
      setError(error.message);
    }
  }

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">EDIT USER</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <input type="hidden" name="_id" />
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
          <div style={{ color: 'red', margin: '10px 0' }}>{error}</div>
          <button className="btn btn-primary">Edit USER</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
