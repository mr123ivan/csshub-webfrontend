import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdminLogout from './AdminLogout';
import axios from 'axios';

const AdminMerch = () => {
  const navigate = useNavigate();
  const [merchList, setMerchList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/merchandises') // Replace with your actual backend URL
      .then(res => setMerchList(res.data))
      .catch(err => console.error('Error fetching merch:', err));
  }, []);

  const handleDelete = async (itemId) => {
    if (window.confirm('Are you sure you want to delete this merchandise item?')) {
      try {
        // Ensure URL matches the DELETE endpoint
        const response = await axios.delete(`http://localhost:8080/api/merchandises/delete/${itemId}`);
        if (response.status === 204) { // No Content status code when deleted successfully
          setMerchList(merchList.filter(item => item.id !== itemId)); // Remove the deleted item from state
        }
      } catch (error) {
        console.error('Error deleting merchandise item:', error);
        alert('There was an error deleting the merchandise item.');
      }
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
            <li>
              <Link to="/adminmembers" className="hover:underline">
                Members
              </Link>
            </li>
            <li>
              <Link to="/admindeletedmembers" className="hover:underline">
                Deleted Members
              </Link>
            </li>
          </ul>

          <h2 className="font-semibold mb-4">Events</h2>
          <ul className="mb-6 space-y-2">
            <li>
              <Link to="/adminupcomingevents" className="hover:underline">
                Upcoming Events
              </Link>
            </li>
            <li>
              <Link to="/admindeletedevents" className="hover:underline">
                Deleted Events
              </Link>
            </li>
          </ul>

          <h2 className="font-semibold mb-4">Merchandise</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/adminmerch" className="hover:underline">
                List of Merchandise
              </Link>
            </li>
            <li>
              <Link to="/admindeletedmerch" className="hover:underline">
                Deleted Merchandise
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white">
        <AdminLogout />
        <header className="bg-black text-yellow-500 text-center py-4 shadow-md">
          <h1 className="text-2xl font-bold">Computer Students Society</h1>
        </header>

        <section className="p-6">
          {/* Dashboard Buttons */}
          <div className="flex gap-6 mb-8">
            <button onClick={() => navigate("/adminaddevent")} className="flex flex-col items-center justify-center w-48 h-32 bg-yellow-500 rounded-lg shadow hover:bg-yellow-600">
              <span className="font-semibold text-black">Add Event</span>
            </button>
            <button onClick={() => navigate("/adminaddmerch")} className="flex flex-col items-center justify-center w-48 h-32 bg-yellow-500 rounded-lg shadow hover:bg-yellow-600">
              <span className="font-semibold text-black">Add Merch</span>
            </button>
          </div>

          {/* Merchandise List */}
          <div className="mt-8 bg-black text-white rounded-lg p-6">
            <h2 className="text-lg font-bold">LIST OF MERCH</h2>
            <p className="text-sm text-gray-400 mb-4">Available items</p>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {merchList.map((item) => (
                <div key={item.id} className="bg-yellow-500 text-black rounded p-4 flex items-start gap-4">
                  <img
                    src={`http://localhost:8080/api/merchandises/image/${item.id}`}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-md">{item.name}</h4>
                    <p className="text-sm">{item.description}</p>
                    <p className="text-sm font-semibold">₱{item.price}</p>
                    <p className="text-sm text-gray-800">Stock: {item.stock}</p>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="mt-2 px-3 py-1 bg-red-600 text-white text-sm rounded shadow hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
              {merchList.length === 0 && <p className="text-white">No merchandise found.</p>}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminMerch;
