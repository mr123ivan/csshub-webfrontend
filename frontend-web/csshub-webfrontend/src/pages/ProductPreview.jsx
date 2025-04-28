import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const ProductPreview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { merch, event } = location.state || {}; // Retrieve passed merch or event

  if (!merch && !event) {
    return <div>Product not found!</div>;
  }

  const item = merch || event;
  const isMerch = !!merch;

  const handleProceed = () => {
    // Redirect to gcashpayment page with either merch or event
    if (isMerch) {
      navigate('/gcashpayment', { state: { merch } });
    } else {
      navigate('/gcashpayment', { state: { event } });
    }
  };

  return (
    <div className="min-h-screen flex">
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

        {/* Main content */}
        <div className="p-6 text-black flex-1 flex items-center justify-center">
          <div className="bg-black rounded-lg shadow-md max-w-2xl w-full overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Image Section */}
              <div className="md:w-1/2 p-4">
                <div className="relative rounded-lg overflow-hidden border-2 border-yellow-500">
                  <img
                    src={
                      isMerch
                        ? `https://ccshub-systeminteg.azurewebsites.net/api/merchandises/image/${merch.id}`
                        : `https://ccshub-systeminteg.azurewebsites.net/api/events/image/${event.eventId}`
                    }
                    alt={item.title || item.name}
                    className="w-full h-auto object-cover"
                  />
                </div>
                {isMerch && (
                  <p className="mt-4 text-yellow-400 text-lg font-semibold text-center">
                    ₱ {merch.price}
                  </p>
                )}
              </div>

              {/* Details Section */}
              <div className="md:w-1/2 p-6">
                <h2 className="text-2xl font-bold text-white mb-2">{item.title || item.name}</h2>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>

                <div className="mt-6 space-y-4">
                  {!isMerch && (
                    <>
                      <p className="text-gray-300">Date: {event.eventDate}</p>
                      <p className="text-gray-300">Location: {event.location}</p>
                    </>
                  )}
                  <button
                    onClick={handleProceed}
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-md transition duration-300 w-full"
                  >
                    {isMerch ? 'Place Order' : 'Join Event'}
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
