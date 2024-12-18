import React, { useState } from 'react';

const Inputbutton = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const InputFieldForm = () => {
    const [inputValue1, setInputValue1] = useState('');

    const handleInputChange1 = (e) => {
      setInputValue1 (e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      localStorage.setItem('submittedData', inputValue1);
      alert(`Data saved: ${inputValue1}`); 
        setInputValue1('');
    };
    return (
      <form onSubmit={handleSubmit}>
      <div className="flex space-x-2">
      
        <input
          type="text"
          value={inputValue1}
          onChange={handleInputChange1}
          className="border rounded-l-lg p-2 w-64"
          placeholder="Enter data here..."
        />
      
      <button 
      onClick={handleSubmit}
      className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-700" type="submit">Submit
      </button>
      </div>
    </form>
    )
  };

  const handleSearch = () => {
    const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    window.open(googleUrl, '_blank'); 
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };


  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-4xl font-bold mb-2 ">Search Something</h1>
      
      <div className="flex space-x-2 ">
        <input 
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="border rounded-l-lg p-2 w-64"
          placeholder="Enter search term..."
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-700 "
        >
          Search
        </button>
      </div>
            <InputFieldForm />

    </div>
  );
};

export default Inputbutton;
