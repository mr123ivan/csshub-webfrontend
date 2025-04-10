import React from 'react';
import { Link } from 'react-router-dom';

const UserPage = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-yellow-500 p-6 shadow-lg flex flex-col justify-between">
        <div>
          {/* User Profile Image and Welcome Text */}
          <div className="flex items-center mb-6">
            <img
              src="https://via.placeholder.com/50" // Placeholder image
              alt="User Profile"
              className="w-12 h-12 rounded-full mr-4" // Circular avatar
            />

            {/* will replace this line with fetch from db */}
            <div className="text-xl font-bold">Welcome, Ivan!</div>
      
            
          </div>


         <Link to = "/userpage">
            <button className="w-full mb-4 px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 transition">
            Home
            </button>
            </Link>
          <Link to = "/merchpage">
          <button className="w-full mb-4 px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 transition">
                      Merchandise
          </button>
          </Link>
          
          <Link to = "/eventpage">
          <button className="w-full px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 transition">
                       Events
          </button>
          </Link>

        </div>
        <div className="text-xs text-gray-400 mt-10">© 2025 CSS</div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 bg-yellow-500 flex flex-col">
        {/* Navbar */}
        <nav className="flex items-center px-6 py-4 shadow-md bg-black">\

        <Link to="/userpage" className="flex-1 flex justify-center">
       <h1 className="text-2xl font-bold text-yellow-500">Computer Student's Society</h1>
       </Link>
          
          <div className="space-x-4">
            <Link
              to="/"
              className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 transition"
            >
              Log out
            </Link>
          </div>
        </nav>
        {/* Placeholder for page content */}
        <div className="p-6 text-black flex-1">
          <h2 className="text-xl font-semibold">Home Page</h2>
          <p className="mt-2">Landing page for members.</p>
        </div>
      </div>
    </div>
  );
};

export default UserPage;