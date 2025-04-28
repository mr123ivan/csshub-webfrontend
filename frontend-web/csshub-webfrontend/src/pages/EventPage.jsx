  import React, { useEffect, useState } from 'react';
  import { Link, useNavigate } from 'react-router-dom';
  import axios from 'axios';

  const EventPage = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      fetchEvents();
    }, []);

    const fetchEvents = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:8080/api/events'); // Replace with your API URL
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="min-h-screen flex">
        {/* Sidebar */}
        <aside className="w-64 bg-black text-yellow-500 p-6 shadow-lg flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-6">
              <img
                src="https://via.placeholder.com/50"
                alt="User Profile"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="text-xl font-bold">Welcome, Ivan!</div>
            </div>

            <Link to="/userpage">
              <button className="w-full mb-4 px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 transition">
                Home
              </button>
            </Link>
            <Link to="/merchpage">
              <button className="w-full mb-4 px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 transition">
                Merchandise
              </button>
            </Link>
            <Link to="/eventpage">
              <button className="w-full px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 transition">
                Events
              </button>
            </Link>
          </div>
          <div className="text-xs text-gray-400 mt-10">© 2025 CSS</div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 bg-yellow-500 flex flex-col">
          {/* Navbar */}
          <nav className="flex items-center px-6 py-4 shadow-md bg-black">
            <Link to="/userpage" className="flex-1 flex justify-center">
              <h1 className="text-2xl font-bold text-yellow-500">Computer Student's Society</h1>
            </Link>
            <div className="space-x-4">
              <Link
                to="/"
                className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600 transition"
              >
                Log out
              </Link>
            </div>
          </nav>

          {/* Scrollable Events Section */}
          <div className="p-6 text-black flex-1 overflow-y-auto max-h-[calc(100vh-5rem)]">
            <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>

            {loading ? (
              <p>Loading events...</p>
            ) : (
              <div className="space-y-4">
              {events.length > 0 ? (
  events.map((event) => (
    <div
      key={event.eventId} // ✅
      onClick={() => navigate('/productpreview', { state: { event: event } })}
      className="bg-white rounded-lg shadow p-4 flex gap-4 cursor-pointer hover:bg-gray-100 transition"
    >
      <img
        src={`http://localhost:8080/api/events/image/${event.eventId}`} // ✅
        alt={event.title}
        className="w-24 h-24 object-cover rounded-md"
      />
      <div>
        <h3 className="text-lg font-bold">{event.title}</h3>
        <p className="text-sm text-gray-700">{event.description}</p>
        <p className="text-sm text-gray-500 mt-2">Date: {event.eventDate}</p> {/* ✅ */}
      </div>
    </div>
  ))
) : (
  <p>No events found.</p>
)}


              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  export default EventPage;
