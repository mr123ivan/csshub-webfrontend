import React from 'react'

const LandingPage = () => {
  return (
    <div className="relative w-1/2 h-full flex justify-center items-center bg-gradient-to-r from-yellow-600 to-black">
    <img
      src="/src/assets/logoBanner.png"  
      alt="Logo"
      className="absolute inset-0 w-20 h-full object-cover"
    />
  </div>
  )
}

export default LandingPage
