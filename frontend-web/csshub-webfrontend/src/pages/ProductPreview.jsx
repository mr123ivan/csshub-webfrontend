import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProductPreview = () => {
  const [merch, setMerch] = useState({
    title: "INFORMATION TECHNOLOGY LANYARD",
    description: "Upgrade your style and show your CSS Information Technology pride with our exclusive IT Lanyard! Designed for students, professionals, and tech enthusiasts, this high-quality lanyard is perfect for holding your ID, badge, or USB while keeping you looking sleek and professional. With its durable material and eye-catching design, it's both practical and stylish. Limited stocks available, so grab yours now and represent CSS IT with pride! Message us to order!",
    price: 115,
    imageUrl: "https://via.placeholder.com/400x400" // Added image URL
  });


  return (
    <div className="min-h-screen flex">
      {/* Main Content */}
      <div className="flex-1 bg-yellow-500 flex flex-col">
        {/* Navbar */}
        <nav className="flex items-center px-6 py-4 shadow-md bg-black">
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

        {/* Product Preview Section */}
        <div className="p-6 text-black flex-1 flex items-center justify-center">
          <div className="bg-black rounded-lg shadow-md max-w-2xl w-full overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="md:w-1/2 p-4">
                <div className="relative rounded-lg overflow-hidden border-2 border-yellow-500">
                  <img src={merch.imageUrl} alt={merch.title} className="w-full h-auto object-cover" />
                 
                </div>
                <p className="mt-4 text-yellow-400 text-lg font-semibold text-center">₱ {merch.price}</p>
              </div>

              {/* Text Content Section */}
              <div className="md:w-1/2 p-6">
                <h2 className="text-2xl font-bold text-white mb-2">{merch.title}</h2>
                <p className="text-gray-300 leading-relaxed">
                  {merch.description}
                </p>
                <div className="mt-6">
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-md transition duration-300">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
