import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdminLogout from './AdminLogout';
import axios from 'axios';

const AdminUpcomingEvents = () => {
  const navigate = useNavigate();
  const [eventsList, setEventsList] = useState([]); // State to store events data

  useEffect(() => {
    // Fetch events data from the backend
    axios.get('http://localhost:8080/api/events') // Replace with the actual API URL for upcoming events
      .then(res => setEventsList(res.data))  // Save the data into state
      .catch(err => console.error('Error fetching events:', err));
  }, []); // Empty dependency array to fetch data only once when the component mounts

  const handleDelete = async (eventId) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        await axios.delete(`http://localhost:8080/api/events/${eventId}`); // Assuming DELETE /api/events/:id
        setEventsList(eventsList.filter(event => event.eventId !== eventId)); // Remove deleted event from state
      } catch (error) {
        console.error('Error deleting event:', error);
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
            <li><Link to="/adminmembers" className="hover:underline">Members</Link></li>
            {/* <li><Link to="/admindeletedmembers" className="hover:underline">Deleted Members</Link></li> */}
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

          {/* Upcoming Events List */}
          <div className="mt-8 bg-black text-white rounded-lg p-6">
            <h2 className="text-lg font-bold">LIST OF UPCOMING EVENTS</h2>
            <p className="text-sm text-gray-400 mb-4">Available upcoming events</p>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {/* Map through the fetched events and display them */}
              {eventsList.map((event) => (
                <div key={event.eventId} className="bg-yellow-500 text-black rounded p-4 flex items-start gap-4">
                  <div className="w-16 h-16 bg-gray-300 rounded">
                    <img
                      src={`http://localhost:8080/api/events/image/${event.eventId}`} // ✅
                      alt={event.title}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                  </div> {/* Placeholder for event image */}
                  <div className="flex-1">
                    <h4 className="font-bold text-md">{event.name}</h4>
                    <p className="text-sm">{event.description}</p>
                    <p className="text-sm text-gray-500 mt-2">Date: {new Date(event.eventDate).toLocaleDateString()}</p> {/* Format the date */}
                    <p className="text-sm text-gray-800">Location: {event.location}</p>
                    <button
                      onClick={() => handleDelete(event.eventId)}
                      className="mt-2 px-3 py-1 bg-red-600 text-white text-sm rounded shadow hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
              {eventsList.length === 0 && <p className="text-white">No upcoming events found.</p>}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminUpcomingEvents;
