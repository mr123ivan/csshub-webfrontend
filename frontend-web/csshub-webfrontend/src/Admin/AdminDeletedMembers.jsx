import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdminLogout from './AdminLogout';
const AdminDeletedMembers = () => {
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

          <div className="mt-8 bg-black text-white rounded-lg p-6">
            <h2 className="text-lg font-bold">LIST OF Deleted Members</h2>
            <p className="text-sm text-gray-400 mb-4">Subheading</p>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {/* Scrollable container with max height */}
              {[...Array(10)].map((_, i) => (
                <div key={i} className="bg-yellow-500 text-black rounded p-4 flex items-start gap-4">
                  <div className="w-16 h-16 bg-gray-300 rounded"></div>
                  <div className="flex-1">
                    <h4 className="font-bold text-md">Title {i + 1}</h4>
                    <p className="text-sm">
                      Body text for whatever you'd like to say. Add main takeaway
                      points, quotes, anecdotes, or even a very very short story.
                    </p>
                    <button className="mt-2 px-3 py-1 bg-white text-black text-sm rounded shadow">
                      Button
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDeletedMembers;