import  { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/products?search=${searchTerm}`);
      onSearch(response.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <input
        type="text"
        placeholder="Search food items by name..."
        className="border border-gray-300 rounded-l py-2 px-4 focus:outline-none focus:ring focus:border-blue-300 w-64"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-r focus:outline-none focus:ring focus:border-blue-300"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
