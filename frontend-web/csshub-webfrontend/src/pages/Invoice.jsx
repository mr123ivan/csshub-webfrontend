// import React from 'react';

// const Invoice = ({ product }) => {
//   const mockInvoice = {
//     date: "04/25/2025",
//     receiptNo: "INV-20250425-001",
//     customerName: "Juan Dela Cruz",
//     contact: "09171234567",
//     item: product.title,
//     quantity: 1,
//     pricePerItem: 115,
//     total: 115,
//     paymentMethod: "GCash",
//     paymentStatus: "Paid"
//   };

//   return (
//     <div className="min-h-screen bg-yellow-500 flex flex-col items-center justify-center p-4">
//       <h1 className="text-black text-2xl font-bold mb-6">{product.title.toUpperCase()}</h1>

//       <div className="bg-black text-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4 font-mono text-sm">
//         <div>
//           <p><strong>Date:</strong> {mockInvoice.date}</p>
//           <p><strong>Receipt No.:</strong> {mockInvoice.receiptNo}</p>
//         </div>

//         <div>
//           <p className="mt-2"><strong>Buyer Information:</strong></p>
//           <p>Name: {mockInvoice.customerName}</p>
//           <p>Contact: {mockInvoice.contact}</p>
//         </div>

//         <div>
//           <p className="mt-2"><strong>Order Details:</strong></p>
//           <p>Item: {mockInvoice.item}</p>
//           <p>Quantity: {mockInvoice.quantity}</p>
//           <p>Price per Item: ₱{mockInvoice.pricePerItem}</p>
//           <p><strong>Total Amount: ₱{mockInvoice.total}</strong></p>
//         </div>

//         <div>
//           <p className="mt-2"><strong>Payment Details:</strong></p>
//           <p>Payment Method: {mockInvoice.paymentMethod}</p>
//           <p>Payment Status: {mockInvoice.paymentStatus}</p>
//         </div>

//         <div className="mt-4 text-center text-yellow-300 font-semibold">
//           Thank you for your purchase!<br />
//           Please check your Outlook for claiming schedule.
//         </div>

//         <div className="text-center text-sm text-gray-300 mt-2">
//           For any concerns, please contact us at our FB page.
//         </div>
//       </div>

//       <button
//         className="mt-6 bg-white text-black px-6 py-2 rounded hover:bg-gray-300 transition font-semibold"
//       >
//         Done
//       </button>
//     </div>
//   );
// };

// export default Invoice;



import React from 'react';

const Invoice = () => {
  return (
    <div className="min-h-screen bg-yellow-500 flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold text-black mb-6">CSS Information Technology Lanyard</h1>

      <div className="bg-black text-white p-6 rounded-lg shadow-md w-full max-w-md font-mono text-sm space-y-4">
        <div>
          <p><strong>Date:</strong> 04/25/2025</p>
          <p><strong>Receipt No.:</strong> INV-20250425-001</p>
        </div>

        <div>
          <p className="mt-2"><strong>Buyer Information:</strong></p>
          <p>Name: Juan Dela Cruz</p>
          <p>Contact: 09171234567</p>
        </div>

        <div>
          <p className="mt-2"><strong>Order Details:</strong></p>
          <p>Item: CSS Information Technology Lanyard</p>
          <p>Quantity: 1</p>
          <p>Price per Item: ₱115</p>
          <p><strong>Total Amount: ₱115</strong></p>
        </div>

        <div>
          <p className="mt-2"><strong>Payment Details:</strong></p>
          <p>Payment Method: GCash</p>
          <p>Payment Status: Paid</p>
        </div>

        <div className="mt-4 text-center text-yellow-300 font-semibold">
          Thank you for your purchase!<br />
          Please check your Outlook for claiming schedule.
        </div>

        <div className="text-center text-sm text-gray-300 mt-2">
          For any concerns, please contact us at our FB page.
        </div>
      </div>

      <button className="mt-6 bg-white text-black px-6 py-2 rounded hover:bg-gray-300 transition font-semibold">
        Done
      </button>
    </div>
  );
};

export default Invoice;
