import React from 'react';

const Signup = () => {
  return (
    <div className="flex w-full h-screen shadow-xl">
      {/* Left Section */}
      <div className="bg-gradient-to-r from-yellow-600 to-black w-1/2 flex justify-center items-center">
      
      </div>
      
      {/* Right Section */}
      <div className="bg-yellow-600 w-1/2 flex flex-col justify-center items-center text-black p-5">
        {/* Back Button */}
        <i className="fas fa-arrow-left absolute top-5 left-5 text-xl cursor-pointer"></i>

        <h1 className="text-2xl mb-5">
          Welcome to Computer Student Society Hub
        </h1>

        {/* Sign Up Section */}
        <div className="signup mb-5">
          <p>Sign up using</p>
       
        </div>

        <p>Already have an account?</p>

        {/* Buttons */}
        <button className="signin bg-gray-800 text-white py-2 px-4 rounded mb-2 text-lg hover:bg-gray-700">
        Sign In
        </button>

        <button className="back border-2 border-black py-2 px-4 rounded text-lg hover:bg-gray-700">
          Back
        </button>
      </div>
    </div>
  );
};

export default Signup;
