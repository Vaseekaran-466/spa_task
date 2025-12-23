import React, { useState } from "react";

const Login = () => {

    const[email,setEmail]=useState("");
    const[pass,setPass]=useState("");

    const inputhandler =(em)=>{

       setEmail(em.target.value) 
    }

     const inputhandlerpass =(pas)=>{

       setPass (pas.target.value)
       const values={
           emaildetails:email,
           password:pass,
       }
       console.log(values);
       
    }



const handleSubmit = (e) => {
  e.preventDefault();
  alert("Login successful!");
};




  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Enter your email:
            </label>
            <input
             onChange={inputhandler}
              value={email}
              type="text"
              id="email"
              placeholder="Enter your email"
              required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="pass" className="block text-gray-700 font-medium mb-1">
              Enter your password:
            </label>
            <input
            onChange={inputhandlerpass}
            value={pass}
             required
              type="password"
              id="pass"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};


export default Login;
