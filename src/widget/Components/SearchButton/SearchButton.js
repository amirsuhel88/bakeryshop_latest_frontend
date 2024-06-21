import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const SearchProducts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`http://localhost:8081/api/v2/searchproduct?q=${searchTerm}&page=1&limit=10`);
      setLoading(false);
      // Redirect to ProductsPage and pass products as state
      console.log(response.data.data)
      navigate('/searchedproducts', { state: { products: response.data.data } });
    } catch (err) {
      setLoading(false);
      setError('Error fetching products. Please try again later.');
      console.error('Error fetching products:', err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter search term..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default SearchProducts;
