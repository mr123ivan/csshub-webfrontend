import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdminLogout from './AdminLogout';
// import { CalendarCheck, Shirt } from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();
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

          <div className="grid grid-cols-3 gap-6">
  {/* Events List */}
  <div className="bg-yellow-500 rounded-lg p-4 shadow max-h-96 overflow-y-auto">
    <h3 className="bg-black text-white rounded-t px-3 py-2 font-bold sticky top-0 z-10">List of Event</h3>
    {[...Array(15)].map((_, i) => (
      <div key={i} className="bg-yellow-300 rounded px-3 py-2 mt-2 text-sm">
        <div className="font-semibold">Event Title {i + 1}</div>
        <div>Description of event {i + 1}</div>
        <div className="text-xs text-right">9:41 AM</div>
      </div>
    ))}
  </div>

  {/* Users List */}
  <div className="bg-yellow-500 rounded-lg p-4 shadow max-h-96 overflow-y-auto">
    <h3 className="bg-black text-white rounded-t px-3 py-2 font-bold sticky top-0 z-10">List of Users</h3>
    {[...Array(15)].map((_, i) => (
      <div key={i} className="bg-yellow-300 rounded px-3 py-2 mt-2 text-sm">
        <div className="font-semibold">User {i + 1}</div>
        <div>Email: user{i + 1}@domain.com</div>
        <div className="text-xs text-right">9:41 AM</div>
      </div>
    ))}
  </div>

  {/* Merchandise List */}
  <div className="bg-yellow-500 rounded-lg p-4 shadow max-h-96 overflow-y-auto">
    <h3 className="bg-black text-white rounded-t px-3 py-2 font-bold sticky top-0 z-10">List of Merch</h3>
    {[...Array(15)].map((_, i) => (
      <div key={i} className="bg-yellow-300 rounded px-3 py-2 mt-2 text-sm">
        <div className="font-semibold">Merch Item {i + 1}</div>
        <div>Description of merch item {i + 1}</div>
        <div className="text-xs text-right">9:41 AM</div>
      </div>
    ))}
  </div>
</div>
        </section>
      </main>
    </div> 
   
  );
};

export default AdminDashboard;
