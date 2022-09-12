import "./App.css";
import {  Route, Routes } from "react-router-dom";

// import ManageCustomer from "./components/managecustomer.component";
import UserDashboard from "./components/user/user-dashboard/user-dashboard.component";
import Header from "./components/headers.component";
import Login from "./components/Login/login.component";
import UserAdd from "./components/admin/UserAddForm/UserAdd.component";
import Home from "./components/Home/home.component";
import UserlistTable from "./components/admin/UserLIstTable/UserListTable.component";
import EditUser from "./components/admin/UserEdit/UserEdit.component";
import MrtgForm from "./components/admin/MrtgForm/MrtgForm/MrtgForm.component";


// import userCreateForm from "./components/admin/admin-UserCreateform/admin-Usercreate-form.component";

const App = () => {
  return (
    <div>
      <Header />
      <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/customers" element={<UserlistTable />} />
            <Route path="/customers/add" element={<UserAdd />} />
            <Route path="/customers/:id" element={<EditUser/>} />

          {/* <Route path="/mrtg" element={<MrtgForm/>}/>
          <Route path="/dashboard" element={<UserDashboard/>}/> 
         */}
            {/* <Route path="customers/:id" element/>
          <Route path="customers/:id" element/> */}
          </Routes>
      </div>
    </div>
  );
};

export default App;

// for superadmin
// /superadmin/login (POST METHOD) => for login superadmin -DONE 
// /customers (GET METHOD) => table of customers on super admin home page
// /customers/add (POST METHOD) => add customers
// /customers/:id (PATCH METHOD) => for edit one customers
// /customers/:id (DELETE METHOD) => for remove one customer with mrtg
// /mrtg/add (POST METHOD) => add mrtg
// /mrtg/:id (PATCH METHOD) => update mrtg
// /mrtg/:id (DELETE METHOD) => remove mrtg
// /mrtg (GET METHOD) => get mrtg

