import React from 'react'
import { Link } from 'react-router-dom'
import cssLogo from '../assets/csslogo.jpg';

const UserPage = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-yellow-500 p-6 shadow-lg flex flex-col justify-between">
        <div>
          <div className="text-xl font-bold mb-6">Welcome, Ivan!</div>
          <button className="w-full mb-4 px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 transition">
            My Profile
          </button>
          <button className="w-full px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 transition">
            My Posts
          </button>
        </div>
        <div className="text-xs text-gray-400 mt-10">© 2025 CSS</div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 bg-yellow-500">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-black">
          <div className="flex items-center space-x-3">
            <img src={cssLogo} alt="CSS Logo" className="w-10 h-10 object-contain" />
            <h1 className="text-2xl font-bold text-yellow-500">Computer Student's Society</h1>
          </div>

          <div className="space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 transition"
            >
              Log out
            </Link>
          </div>
        </nav>

        {/* Placeholder for page content */}
        <div className="p-6 text-black">
          <h2 className="text-xl font-semibold">Dashboard</h2>
          <p className="mt-2">This is where your content will go.</p>
        </div>
      </div>
    </div>
  )
}

export default UserPage
