import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false); // Track input focus
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim()) {
      try {
        // Fetch suggestions from TheMealDB API
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`
        );
        const data = await response.json();

        // Update suggestions with meal names
        if (data.meals) {
          setSuggestions(data.meals.map((meal) => meal.strMeal));
        } else {
          setSuggestions([]);
        }
      } catch (error) {
        console.error("Error fetching suggestions:", error);
        setSuggestions([]);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
    navigate(`/search?q=${encodeURIComponent(suggestion)}`);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center relative">
        <form onSubmit={handleSearch} className="flex w-2/5">
          <input
            type="text"
            placeholder="Search by Country or Ingredients"
            className="px-6 py-2 w-full font-normal border-2 border-gray-600 rounded-3xl items-center outline-none"
            onChange={handleInputChange}
            value={query}
            onFocus={() => setIsFocused(true)} // Show suggestions on focus
            onBlur={() => setIsFocused(false)} // Hide suggestions on blur
          />
          <button
            type="submit"
            className="px-6 py-2 ml-2 bg-gray-900 text-white font-medium text-lg rounded-full items-center"
          >
            Search
          </button>
        </form>
        {isFocused && suggestions.length > 0 && (
          <ul className="absolute top-14 w-2/5 bg-white border border-gray-300 rounded-xl shadow-lg z-10">
            {suggestions.slice(0, 10).map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-primary cursor-pointer"
                onMouseDown={() => handleSuggestionClick(suggestion)} // Prevent blur on click
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default SearchBar;
