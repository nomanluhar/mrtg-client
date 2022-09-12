import axios from "axios";
axios.defaults.withCredentials = true;

export async function onLogin(loginData) {
  return await axios.post("http://localhost:4000/login", loginData);
}

export async function fetchAllCustomers() {
  return await axios.get("http://localhost:4000/customers");
}

export async function fetchSingleCustomer(_id) {
  return await axios.get(`http://localhost:4000/customers/${_id}`);
}

export async function onAddCustomers(customerData, mrtgValues) {
  customerData.mrtg = mrtgValues;
  return await axios.post(
    "http://localhost:4000/customers/create",
    customerData
  );
}

export async function onEditCustomer(customerData) {
  return await axios.patch(
    `http://localhost:4000/customers/${customerData.id}`,
    customerData
  );
}

export async function onRemoveCustomer(customerData) {
  return await axios.delete(`http://localhost:4000/customers/${customerData.id}`);
};

export async function fetchMrtgData(customerData) {
  return await axios.get(`http://localhost:4000/customers/${customerData.id}/mrtg`);
}
