import React, { useState } from 'react';

const Inputbutton = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    alert(`Searching for: ${searchQuery}`); // This will display the searched term
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Search Something</h1>
      
      <div className="flex">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border rounded-l-lg p-2 w-64"
          placeholder="Enter search term..."
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-700"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Inputbutton;
