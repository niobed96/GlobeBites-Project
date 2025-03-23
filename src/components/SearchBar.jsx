import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };
  return (
    <>
      <div className="flex space-x-2 items-center justify-center">
        <form onSubmit={handleSearch} className="flex w-2/5">
          <input
            type="text"
            placeholder="Search by Country or Ingredients"
            className="px-6 py-2 w-full font-normal border-2 border-gray-600 rounded-3xl items-center outline-none"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
          <button
            type="submit"
            className="px-6 py-2 ml-2 bg-gray-900 text-white font-medium text-lg rounded-full items-center"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
}

export default SearchBar;
