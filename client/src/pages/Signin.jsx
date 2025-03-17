import React from "react";


import { Link, useNavigate } from 'react-router-dom';


export default function Signin() {
  return (
<div className="flex items-center justify-center min-h-screen">
      <div className="md:bg-slate-200 p-8 rounded-lg shadow-lg flex w-2/3 max-w-4xl sm:w-fit sm:ml-5 sm:mr-5 sm:bg-transparent">
        {/* Left Side - 3D Illustration */}
        <div className="w-1/2 flex items-center justify-center">
          <img src="https://github.com/iAmVip1/serviceaggregator/blob/main/images/logo1.png?raw=true" alt="Illustration" className="w-80" />
        </div>
        {/* Right Side - Form */}
        <div className="w-1/2 p-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center">Sign In</h2>
          <p className="text-gray-600 text-center mb-4">Unlock your world.</p>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Email</label>
              <input type="email" className="w-full px-4 py-2 border rounded-md " placeholder="Enter your email" required />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Password</label>
              <input type="password" className="w-full px-4 py-2 border rounded-md " placeholder="Enter your password" required />
            </div>
            <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">Sign In</button>
          
          </form>
          <p className="text-center text-gray-600 mt-4">
          Don't have an account? <Link to='/signup' className="text-blue-500">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  )
}


