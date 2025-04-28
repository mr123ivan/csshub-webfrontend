import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const MerchPage = () => {
  const [merchList, setMerchList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMerchandise();
  }, []);

  const fetchMerchandise = async (keyword = '') => {
    setLoading(true);
    try {
      const response = await axios.get('https://ccshub-systeminteg.azurewebsites.net/api/merchandises', {
        params: { keyword },
      });
      setMerchList(response.data);
    } catch (error) {
      console.error('Error fetching merchandise:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchMerchandise(searchKeyword);
  };

  const handleBuyNow = (item) => {
    navigate('/productpreview', { state: { merch: item } }); // Passing the selected product as state
  };

  return (
    <div className="min-h-screen flex">
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

      <div className="flex-1 bg-yellow-500 flex flex-col">
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

        <div className="p-6 text-black">
          <h2 className="text-xl font-semibold mb-4">Upcoming Merch</h2>
          <form onSubmit={handleSearchSubmit} className="mb-6">
            <input
              type="text"
              value={searchKeyword}
              onChange={handleSearchChange}
              placeholder="Search for merchandise"
              className="w-full px-4 py-2 rounded-lg border border-gray-300"
            />
            <button type="submit" className="mt-2 w-full bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600">
              Search
            </button>
          </form>

          <div className="mt-8 bg-black text-white rounded-lg p-6">
            <h2 className="text-lg font-bold">LIST OF MERCH</h2>
            <p className="text-sm text-gray-400 mb-4">Available items</p>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {loading ? (
                <p>Loading merchandise...</p>
              ) : (
                merchList.map((item) => (
                  <div key={item.id} className="bg-yellow-500 text-black rounded p-4 flex items-start gap-4">
                    <img
                      src={`https://ccshub-systeminteg.azurewebsites.net/api/merchandises/image/${item.id}`}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-bold text-md">{item.name}</h4>
                      <p className="text-sm">{item.description}</p>
                      <p className="text-sm font-semibold">₱{item.price}</p>
                      <p className="text-sm text-gray-800">Stock: {item.stock}</p>
                      <button
                        className="mt-2 px-3 py-1 bg-white text-black text-sm rounded shadow"
                        onClick={() => handleBuyNow(item)} // Pass the item when clicked
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchPage;
