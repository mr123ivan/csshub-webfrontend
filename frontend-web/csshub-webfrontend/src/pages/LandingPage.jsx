import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className="min-h-screen bg-yellow-500">
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

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-4 py-20 ">
        <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
          Welcome to CSSHub
        </h2>
        <p className="text-lg sm:text-xl text-black-600 mb-6 max-w-xl">
         A hub made for Computer Student Society Members
        </p>
     
      </div>
    </div>
  )
}

export default LandingPage
