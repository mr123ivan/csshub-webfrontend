import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const GcashPayment = () => {
  const [receipt, setReceipt] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  
  const { merch, event } = location.state || {}; // Now we handle both merch and event
  const item = merch || event; // Choose whichever exists (either merch or event)
  const isMerch = !!merch; // Check if it's merch (true) or event (false)

  const handleFileChange = (e) => {
    setReceipt(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (receipt) {
      // Once the receipt is uploaded, navigate to the invoice page and pass the item data
      navigate('/invoice', { state: { item } });
    } else {
      alert("Please upload your GCash receipt.");
    }
  };

  return (
    <div className="min-h-screen bg-yellow-500 flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold text-black mb-2">{item.title || item.name}</h2>

      <div className="bg-black p-6 rounded-lg shadow-md w-full max-w-xs flex flex-col items-center">
        <img
          src="./public/QrcodeCSS.png"
          alt="GCash QR Code"
          className="w-full rounded mb-4"
        />

        <label className="text-white mb-2">Upload GCash Receipt</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mb-4 bg-white p-1 rounded w-full text-sm"
        />

        <button
          onClick={handleSubmit}
          className="bg-white text-black px-6 py-2 rounded hover:bg-gray-300 transition font-semibold"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default GcashPayment;