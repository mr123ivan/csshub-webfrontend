import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AdminLogout from './AdminLogout';
import axios from 'axios'; // don't forget to install this with npm/yarn if you haven't

const AdminAddMerch = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [stock, setStock] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('imageFile', image); // change 'image' to 'imageFile'
    formData.append('stock', stock);


    try {
      const res = await axios.post('http://localhost:8080/api/merchandises/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Merch added successfully!');
      console.log(res.data);
    } catch (error) {
      console.error('Failed to add merch:', error);
      alert('Failed to add merch');
    }
  };


  return (


   
    <div className="min-h-screen flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-black p-6 text-black">
        <div className="mb-10">
          <img
            src="/path-to-logo.png"
            alt="CSS Logo"
            className="w-10 h-10 mb-6"
          />
          <h2 className="font-semibold mb-4">Members</h2>
          <ul className="mb-6 space-y-2">
            <li><Link to="/adminmembers" className="hover:underline">Members</Link></li>
          </ul>

          <h2 className="font-semibold mb-4">Events</h2>
          <ul className="mb-6 space-y-2">
            <li><Link to="/adminupcomingevents" className="hover:underline">Upcoming Events</Link></li>
          </ul>

          <h2 className="font-semibold mb-4">Merchandise</h2>
          <ul className="space-y-2">
            <li><Link to="/adminmerch" className="hover:underline">List of Merchandise</Link></li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white">
      <AdminLogout/>
        <header className="bg-black text-yellow-500 text-center py-4 shadow-md">
          <h1 className="text-2xl font-bold">Computer Students Society</h1>
        </header>
        <section className="p-6">
  <form
    onSubmit={handleSubmit}
    className="bg-yellow-100 p-8 rounded-2xl shadow-md max-w-2xl mx-auto mt-10 space-y-6"
  >
    <h2 className="text-2xl font-bold text-gray-800">Add Merchandise</h2>

    <div>
      <label className="block text-gray-700 mb-2">Name of merch</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-3"
        placeholder="Enter merch name"
      />
    </div>

    <div>
      <label className="block text-gray-700 mb-2">Merch Description</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-3"
        placeholder="Enter merch description"
      />
    </div>

    <div>
      <label className="block text-gray-700 mb-2">Price</label>
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-3"
        placeholder="Enter merch price"
      />
    </div>

    {/* 🔢 Stock Input */}
    <div>
      <label className="block text-gray-700 mb-2">Stock Available</label>
      <input
        type="number"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-3"
        placeholder="Enter stock quantity"
        min="0"
      />
    </div>

    <div>
      <label className="block text-gray-700 mb-2">Upload merch design</label>
      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        className="w-full border border-gray-300 rounded-lg p-2"
      />
    </div>

    <button
      type="submit"
      className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
    >
      Submit
    </button>
  </form>
</section>
      </main>
    </div>

  );
};

export default AdminAddMerch;
