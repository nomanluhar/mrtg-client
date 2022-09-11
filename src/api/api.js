import axios from 'axios'
axios.defaults.withCredentials = true

export async function onLogin(loginData) {
    return await axios.post('http://localhost:4000/login', loginData);
};

export async function fetchAllCustomers() {
    return await axios.get('http://localhost:4000/customers');
};

export async function onAddCustomers(customerData) {
    return await axios.post('http://localhost:4000/customers/create', customerData);
};

export async function onEditCustomers(customerData) {
    return await axios.patch('http://localhost:4000/customers/:id', customerData);
};

export async function onRemoveCustomers() {
    return await axios.remove('http://localhost:4000/customers/:id');
};