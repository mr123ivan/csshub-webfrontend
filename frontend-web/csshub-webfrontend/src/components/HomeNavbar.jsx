import React from 'react'

const HomeNavbar = () => {
  return (
    <div>
        {/* Navbar */}
        <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-black">
        <h1 className="text-2xl font-bold text-yellow-500">Computer Student's Society</h1>

        <div className="space-x-4">
          <Link
            to="/login"
            className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 transition"
          >
            Log in
          </Link>

          <Link
            to="/signup"
            className="px-4 py-2 border border-yellow-500 text-yellow-500 rounded hover:bg-yellow-50 transition"
          >
            Sign up
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default HomeNavbar
