import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleCustomer } from "../../../api/api";

var initialState = {
  _id: "",
  full_name: "",
  email: "",
  user_name: "",
  user_type: "customer",
}



const UserDashboard = () => {
  let { id } = useParams();
  const [values, setValues] = useState(initialState);

  useEffect(() => {
    if (id) {
      loadOneCustomer();
    }
  });
  
  const loadOneCustomer = async () => {
    const response = await fetchSingleCustomer(id);
    console.log(response)
    // console.log(response.data.customer)
    // setValues(response);
  };
  
  return (
    <div>
      <div>
        <h2>Customer Information</h2>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <div className="mb-3">
            <label className="form-label">Full Name:</label>
            <input className="form-control" value={''} disabled />
          </div>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input className="form-control" value={''} disabled />
          </div>
          <div className="mb-3">
            <label className="form-label">User Name:</label>
            <input className="form-control" value={''} disabled />
          </div>
        </div>
        <div className="col-sm-6">
          Class 2
        </div>
      </div>

      {/* <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          title="this is our inline frame"
          src="https://www.google.com/maps/place/Intellimedia+Networks+India/@23.0340377,72.5643154,17z/data=!3m1!4b1!4m5!3m4!1s0x395e84f5e8950b4d:0x6d7ef987bce56ad6!8m2!3d23.0340311!4d72.5665031"
          allowfullscreen
        ></iframe>
      </div> */}
    </div>
  );
};

export default UserDashboard;
