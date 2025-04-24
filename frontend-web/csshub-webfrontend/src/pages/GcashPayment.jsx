// import React, { useState } from 'react';

// const GcashPayment = ({ product }) => {
//   const [receipt, setReceipt] = useState(null);

//   const handleFileChange = (e) => {
//     setReceipt(e.target.files[0]);
//   };

//   const handleSubmit = () => {
//     if (receipt) {
//       alert(`Receipt for ${product.title} submitted!`);
//     } else {
//       alert("Please upload your GCash receipt.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-yellow-500 flex flex-col items-center justify-center p-4">
//       {/* <h1 className="text-black text-2xl font-bold mb-6">{product.title.toUpperCase()}</h1> */}

//       <h1 className="text-black text-2xl font-bold mb-6">This is a test</h1>


//       <div className="bg-black p-6 rounded-lg shadow-md w-full max-w-xs flex flex-col items-center">
//         <img
//           src={product.qrImageUrl}
//           alt={`${product.title} QR Code`}
//           className="w-full rounded mb-4"
//         />

//         <label className="text-white mb-2">Upload GCash Receipt</label>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleFileChange}
//           className="mb-4 bg-white p-1 rounded w-full text-sm"
//         />

//         <button
//           onClick={handleSubmit}
//           className="bg-white text-black px-6 py-2 rounded hover:bg-gray-300 transition font-semibold"
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default GcashPayment;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GcashPayment = () => {
  const [receipt, setReceipt] = useState(null);

  const handleFileChange = (e) => {
    setReceipt(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (receipt) {
      alert("Receipt submitted!");
    } else {
      alert("Please upload your GCash receipt.");
    }
  };

  return (
    <div className="min-h-screen bg-yellow-500 flex flex-col items-center justify-center p-4">
      <h1 className="text-black text-2xl font-bold mb-6">LANYARD</h1>

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
