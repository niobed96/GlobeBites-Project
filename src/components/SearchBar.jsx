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
        // Fetch suggestions from API
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
      <div className="flex flex-col items-center justify-center relative mx-10 mb-2">
        <form
          onSubmit={handleSearch}
          className=" w-full md:w-4/6 justify-between flex lg:flex-row lg:w-6/12"
        >
          <input
            type="text"
            placeholder="Search by Country or Ingredients"
            className="px-6 py-2 w-3/4 md:w-full font-normal border-2 border-solid border-gray-400 hover:shadow-lg rounded-2xl items-center outline-none placeholder:text-gray-500"
            onChange={handleInputChange}
            value={query}
            // Show suggestions on focus
            onFocus={() => setIsFocused(true)}
            // Hide suggestions on blur
            onBlur={() => setIsFocused(false)}
          />
          <button
            type="submit"
            className="px-6 py-2 ml-2 bg-black text-white font-medium text-lg rounded-2xl items-center flex m-auto "
          >
            Search
          </button>
        </form>
        {isFocused && suggestions.length > 0 && (
          <ul className="absolute top-14 w-full md:w-2/5 m-auto bg-white border border-gray-300 rounded-xl shadow-lg z-10 md:mr-28">
            {suggestions.slice(0, 10).map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-slate-300 rounded-lg cursor-pointer"
                // Prevent blur on click
                onMouseDown={() => handleSuggestionClick(suggestion)}
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
