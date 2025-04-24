import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Example hardcoded authentication (replace with real backend logic)
    if (username === "admin" && password === "password123") {
      // Navigate to admin dashboard or protected route
      navigate("/admin-dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex w-full h-screen shadow-xl">
      {/* Left Section with Background Image */}
      <div
        className="relative w-1/2 h-full bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/logoBanner.png')" }}
      ></div>

      {/* Right Section */}
      <div className="relative bg-[#DEA811] w-1/2 flex flex-col justify-center items-center text-black p-10">
        {/* Back Button */}
        <Link to="/">
          <FaArrowLeft className="absolute top-5 left-5 text-2xl cursor-pointer hover:text-yellow-400" />
        </Link>

        {/* Header */}
        <h1 className="text-3xl font-semibold mb-5 font-serif text-center">
          Welcome to Computer Student Society Hub Admin
        </h1>

        <span className="text-black font-medium mb-4">Login with your credentials</span>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="flex flex-col w-3/4 gap-4">
          <input
            type="text"
            placeholder="Username"
            className="py-2 px-4 rounded-md border border-gray-400"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="py-2 px-4 rounded-md border border-gray-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <span className="text-red-600">{error}</span>}
          <button
            type="submit"
            className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800"
          >
            Log In
          </button>
        </form>

       
      </div>
    </div>
  );
};

export default AdminLogin;
