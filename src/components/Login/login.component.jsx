import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { onLogin } from "../../api/api.js";
import "../Login/login.component.css";


const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await onLogin(values);
      const userType = response.data.type;
      if (userType === 'admin') {
        navigate('/customers');
      } else if (userType === 'customer') {
        navigate(`/dashboard/${response.data.user.id}`);
      };
    } catch (error) {
      console.log(error.response)
      setError(error.response.data.message);
    }
  }
  
  return (
    <div className="container-login-container">
      <div className="row">
        <h3 className="text-center">Login form</h3>
        <div className="d-flex justify-content-center md-8 login-form-1">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-2">
              <label>Your Email:</label>
              <input onChange={(e) => onChange(e)} name="email" type="email" className="form-control" value={values.email} placeholder='test@gmail.com' required />
            </div>
            <div className="mb-2">
              <label>Your Password:</label>
              <input onChange={(e) => onChange(e)} name="password" type="password" className="form-control" value={values.password} placeholder='password' required />
            </div>
            <div style={{ color: 'red', margin: '10px 0' }}>{error}</div>
            <div className="form-group">
              <button type="submit" className="btnSubmit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
