import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdminLogout from './AdminLogout';
import axios from 'axios';

const AdminMembers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/users'); // Adjust if your endpoint is different
      setUsers(response.data);
    } catch (error) {
      console.error("There was an error fetching the users!", error);
    }
  };

  const handleDelete = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await axios.delete(`http://localhost:8080/api/users/${userId}`); // Assuming DELETE /api/users/:id
        setUsers(users.filter(user => user.userId !== userId)); // Remove deleted user from state
      } catch (error) {
        console.error('Error deleting user:', error);
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
            <button
              onClick={() => navigate("/adminaddevent")}
              className="flex flex-col items-center justify-center w-48 h-32 bg-yellow-500 rounded-lg shadow hover:bg-yellow-600"
            >
              <div className="w-10 h-10 mb-2" /> {/* Placeholder for an icon */}
              <span className="font-semibold text-black">Add Event</span>
            </button>

            <button
              onClick={() => navigate("/adminaddmerch")}
              className="flex flex-col items-center justify-center w-48 h-32 bg-yellow-500 rounded-lg shadow hover:bg-yellow-600"
            >
              <div className="w-10 h-10 mb-2" /> {/* Placeholder for an icon */}
              <span className="font-semibold text-black">Add Merch</span>
            </button>
          </div>

          <div className="mt-8 bg-black text-white rounded-lg p-6">
            <h2 className="text-lg font-bold">LIST OF MEMBERS</h2>
            <p className="text-sm text-gray-400 mb-4">Subheading</p>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {/* Scrollable container */}
              {users.length > 0 ? (
                users.map((user) => (
                  <div key={user.userId} className="bg-yellow-500 text-black rounded p-4 flex items-start gap-4">
                    <div className="w-16 h-16 bg-gray-300 rounded"></div>
                    <div className="flex-1">
                      <h4 className="font-bold text-md">{user.username}</h4>
                      <p className="text-sm">{user.email}</p>
                      <button
                        onClick={() => handleDelete(user.userId)}
                        className="mt-2 px-3 py-1 bg-red-600 text-white text-sm rounded shadow hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p>No users found.</p>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminMembers;
