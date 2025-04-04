import React from "react";
import { FaArrowLeft } from "react-icons/fa";



const Login = () => {
  return (
  <div className="flex w-full h-screen shadow-xl">
  {/* Left Section with Background */}
  <div className="relative w-1/2 h-full flex justify-center items-center bg-gradient-to-r from-yellow-600 to-black">
    <img
      src="/src/assets/logoBanner.png"  
      alt="Logo"
      className="absolute inset-0 w-20 h-full object-cover"
    />
  </div>



      {/* Right Section */}
      <div className="relative bg-[#DEA811] w-1/2 flex flex-col justify-center items-center text-black p-10">
        {/* Back Button */}
        <FaArrowLeft className="absolute top-5 left-5 text-2xl cursor-pointer hover:text-gray-800" />

        {/* Header */}
        <h1 className="text-3xl font-semibold mb-5 font-serif">
          Welcome to Computer Student Society Hub
        </h1>

        {/* Microsoft Sign-in */}
        <span className="text-black font-medium">Continue with Microsoft</span>
        <button className="flex items-center gap-2 bg-white border border-gray-300 px-5 py-2 rounded-lg shadow-md hover:shadow-lg mb-5">
          <img
            src="/src/assets/microsoft logo.png" // Update this path
            alt="Microsoft"
            className="w-11 h-6"
          />
         
        </button>

        <p className="mb-2 mt-20">Don’t have an account yet?</p>

        {/* Sign Up Button */}
        <button className="bg-gray-800 text-white py-2 px-6 rounded-lg mb-3 text-lg hover:bg-gray-700">
          Sign Up
        </button>

        {/* Back Button */}
        <button className="border-2 border-black py-2 px-6 rounded-lg text-lg hover:bg-gray-700">
          Back
        </button>
      </div>
    </div>
  );
};

export default Login;
