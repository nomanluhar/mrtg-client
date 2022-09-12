import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllCustomers, onRemoveCustomer } from "../../../api/api.js";

const UserlistTable = () => {
  var [tableData, setTableData] = useState([]);

  const loadCustomers = async () => {
    const response = await fetchAllCustomers();
    setTableData(response?.data?.customers);
  };

  const onRemove = async (e, item) => {
    try {
      if (window.confirm("Do you want to remove?")) {
        await onRemoveCustomer(item);
        loadCustomers();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      loadCustomers();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <div>
      <div>
        <h2>Manage User</h2>

        <Link to="/customers/add">
          <button className="btn btn-primary mr-2">ADD MORE</button>
        </Link>
      </div>

      <table className="table border shadow">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Full Name</th>
            <th scope="col">Email</th>
            <th scope="col">User Name</th>
            {/* <th>MRTG URL</th> */}
            <th>MRTG</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.length ? (
            tableData.map((user, index) => (
              <tr key={index}>
                <td>{user.full_name}</td>
                <td>{user.email}</td>
                <td>{user.user_name}</td>
                <td>
                  <Link to={`/customers/${user.id}/mrtg`}>
                    <button className="btn btn-primary mr-2">Show MRTG</button>
                  </Link>
                </td>
                <td>
                  <Link to={`/customers/${user.id}`}>
                    <button className="btn btn-secondary mr-2 ">Edit</button>
                  </Link>

                  <button
                    className="btn btn-danger sm me-2"
                    onClick={(e) => onRemove(e, user)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No Data Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserlistTable;
