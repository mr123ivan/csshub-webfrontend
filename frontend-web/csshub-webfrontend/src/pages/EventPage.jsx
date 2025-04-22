import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  // Mockup data for preview
  useEffect(() => {
    const mockEvents = [
      { title: 'CSS Orientation 2025', description: 'Welcoming new members and presenting plans for the school year.', date: '2025-05-01' },
      { title: 'Tech Talk: AI in 2025', description: 'A seminar on emerging AI trends.', date: '2025-05-10' },
      { title: 'Hackathon', description: '24-hour coding event for all members.', date: '2025-05-20' },
      { title: 'CSS Sports Fest', description: 'A fun day with games and competitions.', date: '2025-06-05' },
      { title: 'Web Dev Bootcamp', description: 'Crash course on full-stack development.', date: '2025-06-12' },
      { title: 'Alumni Night', description: 'Meet and connect with former CSS officers and members.', date: '2025-06-20' },
      { title: 'Project Demo Day', description: 'Final project presentations by members.', date: '2025-06-30' },
      { title: 'CSS Outreach', description: 'Community service project organized by members.', date: '2025-07-10' }
    ];
    setEvents(mockEvents);
  }, []);

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

{events.length > 0 ? (
          <div className="space-y-4">
            {events.map((event) => (
              <div
                key={event.id}
                onClick={() => navigate(`/event/${event.id}`)}
                className="bg-white rounded-lg shadow p-4 flex gap-4 cursor-pointer hover:bg-gray-100 transition"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div>
                  <h3 className="text-lg font-bold">{event.title}</h3>
                  <p className="text-sm text-gray-700">{event.description}</p>
                  <p className="text-sm text-gray-500 mt-2">Date: {event.date}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No events found.</p>
        )}
        </div>
      </div>
    </div>
  );
};

export default EventPage;
