import React, { useState } from 'react';

const SearchBar = ({movies}) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

console.log(movies)
  const handleChange = (e) => {
    setSearchInput(e.target.value);
    const filteredCountries = movies?.filter((country) =>
      country.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchResults(filteredCountries);
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}      
        />

      <table>
        <thead>
          <tr>
            <th>Movie Title</th>          
            <th>Streaming Availability</th>
          </tr>
        </thead>
        <tbody>
          {searchResults?.map((country, index) => (
            <tr key={index}>
              <td>{country.title}</td>
              <td>{country.source_name}</td>
              {/* <td>{country.poster_url}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchBar;