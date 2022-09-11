// import React from "react";
// import { useState } from "react";

// const EditUser = () => {
//   const [ editUser, setEditUser ] = useState([]);

//   const handleInputChange = (event) => {


//   }

//   const handleSubmit = (event)=> {
//     event.preventDefault()
//   }


//   return (
//     <div className="container">
//       <div className="w-75 mx-auto shadow p-5">
//         <h2 className="text-center mb-4">ADD A USER</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <input
//               type="text"
//               id="username"
//               className="form-control form-control-lg"
//               name="username"
//               placeholder="Enter your Username"
//               value={username}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div className="form-group">
//             {/* <label htmlFor="email">email</label> */}
//             <input
//               type="email"
//               id="email"
//               className="form-control form-control-lg"
//               name="email"
//               placeholder="Enter your Email"
//               value={email}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               id="name"
//               name="name"
//               placeholder="Enter your name "
//               value={name}
//               onChange={handleInputChange}
//             />
//           </div>

//           <div className="form-group">
//             <input
//               type="password"
//               className="form-control form-control-lg"
//               id="password"
//               name="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={handleInputChange}
//             />
//           </div>

//           <button className="btn btn-primary">Edit USER</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditUser;