// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { registerUser } from "../redux/actions/authAction";
// import { useNavigate } from "react-router-dom";

// const Register = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const { error } = useSelector((state) => state.auth);

//     const [formData, setFormData] = useState({
//         username: "",
//         email: "",
//         password: "",
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(registerUser(formData));
//         navigate("/login"); // Redirect after successful registration
//     };

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <div className="bg-white p-8 rounded-lg shadow-md w-96">
//                 <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
//                 {error && <p className="text-red-500 mb-4">{error.message}</p>}
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     <div>
//                         <input
//                             type="text"
//                             name="username"
//                             placeholder="Username"
//                             onChange={handleChange}
//                             required
//                             className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                     </div>
//                     <div>
//                         <input
//                             type="email"
//                             name="email"
//                             placeholder="Email"
//                             onChange={handleChange}
//                             required
//                             className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                     </div>
//                     <div>
//                         <input
//                             type="password"
//                             name="password"
//                             placeholder="Password"
//                             onChange={handleChange}
//                             required
//                             className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                     </div>
//                     <div>
//                         <button
//                             type="submit"
//                             className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
//                         >
//                             Register
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Register;