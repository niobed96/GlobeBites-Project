import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/NavBar";

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Extract query from URL
  const query = new URLSearchParams(location.search).get("q") || "";

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) return;

      setLoading(true);
      try {
        let meals = null;
        const lowerQuery = query.toLowerCase();

        // Try searching by recipe name first
        const nameRes = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );
        meals = nameRes.data.meals;

        // If no results, try by country (area)
        if (!meals) {
          const areaRes = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/filter.php?a=${query}`
          );
          meals = areaRes.data.meals;
        }

        // If no results, try by ingredient
        if (!meals) {
          const ingRes = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`
          );
          meals = ingRes.data.meals;
        }

        // Fetch detailed recipes if results exist
        if (meals) {
          const detailedMeals = await Promise.all(
            meals.slice(0, 9).map(async (meal) => {
              const detailRes = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
              );
              return detailRes.data.meals[0];
            })
          );
          setResults(detailedMeals);
        } else {
          setResults([]);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  const handleRecipeClick = (recipeId) => {
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <>
      <Navbar />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-16 text-center">
            Recipe Results for "{query}"
          </h1>
          {loading ? (
            <p className="text-center text-gray-600">Loading...</p>
          ) : results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {results.map((recipe) => (
                <div
                  key={recipe.idMeal}
                  onClick={() => handleRecipeClick(recipe.idMeal)}
                  className="bg-slate-100 rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition"
                >
                  <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    className="w-full h-56 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold">{recipe.strMeal}</h3>
                  <p className="text-gray-600">{recipe.strArea}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">
              No results found for "{query}". Try a country (e.g., Indian),
              ingredient (e.g., chicken), or recipe name (e.g., Chicken Tikka
              Masala).
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchResults;
