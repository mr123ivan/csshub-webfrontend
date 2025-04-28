import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Invoice = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Use the useNavigate hook for routing
  const { item } = location.state || {}; // Retrieve the passed item (merch or event)

  if (!item) {
    return <div>Invoice not found!</div>; // Handle case where no item was passed
  }

  // Format the item details (can be either event or merchandise)
  const isMerch = item.price !== undefined; // Check if it's merchandise (it will have a price)

  const handleDoneClick = () => {
    navigate('/userpage'); // Redirect to /userpage when button is clicked
  };

  return (
    <div className="min-h-screen bg-yellow-500 flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold text-black mb-6">{isMerch ? item.name : item.title}</h1>

      <div className="bg-black text-white p-6 rounded-lg shadow-md w-full max-w-md font-mono text-sm space-y-4">
        <div>
          <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
          <p><strong>Receipt No.:</strong> INV-{new Date().toISOString().slice(0, 10).replace(/-/g, '')}-001</p>
        </div>

        <div>
          <p className="mt-2"><strong>Buyer Information:</strong></p>
          <p>Name: TO BE MODIFIED </p>
        </div>

        <div>
          <p className="mt-2"><strong>Order Details:</strong></p>
          <p>Item: {isMerch ? item.name : item.title}</p>
          {isMerch ? (
            <>
              <p>Quantity: TO BE MODIFIED</p>
              <p>Price per Item: ₱{item.price}</p>
            </>
          ) : (
            <p>Date: {item.eventDate}</p>
          )}
          <p><strong>Total Amount: ₱{isMerch ? item.price : 'TBD'}</strong></p>
        </div>

        <div>
          <p className="mt-2"><strong>Payment Details:</strong></p>
          <p>Payment Method: GCash</p>
          <p>Payment Status: Paid</p>
        </div>

        <div className="mt-4 text-center text-yellow-300 font-semibold">
          Thank you for your {isMerch ? 'purchase' : 'registration'}!<br />
          Please check your Outlook for claiming schedule.
        </div>

        <div className="text-center text-sm text-gray-300 mt-2">
          For any concerns, please contact us at our FB page.
        </div>
      </div>

      <button
        onClick={handleDoneClick} // Add the onClick handler for the Done button
        className="mt-6 bg-white text-black px-6 py-2 rounded hover:bg-gray-300 transition font-semibold"
      >
        Done
      </button>
    </div>
  );
};

export default Invoice;
