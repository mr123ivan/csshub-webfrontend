import React from 'react';
import { Link } from 'react-router-dom';
// import { CalendarCheck, Shirt } from 'lucide-react';

const AdminAddEvent = () => {
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
            <li><Link to="/admindeletedmembers" className="hover:underline">Deleted Members</Link></li>
          </ul>

          <h2 className="font-semibold mb-4">Events</h2>
          <ul className="mb-6 space-y-2">
            <li><Link to="/adminupcomingevents" className="hover:underline">Upcoming Events</Link></li>
            <li><Link to="/admindeletedevents" className="hover:underline">Deleted Events</Link></li>
          </ul>

          <h2 className="font-semibold mb-4">Merchandise</h2>
          <ul className="space-y-2">
            <li><Link to="/adminmerch" className="hover:underline">List of Merchandise</Link></li>
            <li><Link to="/admindeletedmerch" className="hover:underline">Deleted Merchandise</Link></li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-white">
        <header className="bg-black text-yellow-500 text-center py-4 shadow-md">
          <h1 className="text-2xl font-bold">Computer Students Society</h1>
        </header>

        <section className="p-6">
 

        <section className="bg-yellow-100 p-8 rounded-2xl shadow-md max-w-2xl mx-auto mt-10 space-y-6">
  <h2 className="text-2xl font-bold text-gray-800">Submit your details</h2>

  {/* Text Input */}
  <div>
    <label className="block text-gray-700 mb-2">Name of event</label>
    <input 
      type="text" 
      placeholder="Enter your name" 
      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
    />
  </div>

  {/* Dropdown Menu */}
  <div>
    <label className="block text-gray-700 mb-2">Committee in charge</label>
    <select 
      className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
    >
      <option value="">Choose an option</option>
      <option value="event">Event</option>
      <option value="reservation">Reservation</option>
      <option value="other">Other</option>
    </select>
  </div>

  <div>
    <label className="block text-gray-700 mb-2">Name of Officer</label>
    <input 
      type="text" 
      placeholder="Enter your name" 
      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
    />
  </div>

  {/* Upload File */}
  <div>
    <label className="block text-gray-700 mb-2">Upload File</label>
    <input 
      type="file" 
      className="w-full text-gray-600 bg-white border border-gray-300 rounded-lg p-2 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-400 file:text-black hover:file:bg-yellow-500"
    />
  </div>

  {/* Submit Button */}
  <button className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
    Submit
  </button>
</section>


        </section>
      </main>
    </div>
  );
};

export default AdminAddEvent;
