import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]); // State to store recipes
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState(null); // State to track errors
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        // Fetch recipes from TheMealDB API
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );
        const data = await response.json();

        if (data.meals) {
          setRecipes(data.meals); // Update recipes state with fetched data
        } else {
          setRecipes([]); // No recipe
        }
      } catch (err) {
        console.error("Error fetching recipes:", err);
        setError("Failed to fetch recipes. Please try again later.");
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchRecipes();
  }, []);

  const handleRecipeClick = (recipeId) => {
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <>
      <Navbar />
      <div className="mx-24 my-10">
        <h2 className="text-4xl font-bold mb-8 text-center">Explore Recipes</h2>
        {loading ? (
          <p className="text-center text-gray-600">Loading recipes...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : recipes.length > 0 ? (
          <div className="grid grid-cols-3 gap-10">
            {recipes.map((recipe) => (
              <div
                key={recipe.idMeal}
                className="p-5 rounded-xl shadow-lg bg-slate-100 hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  className="rounded-xl h-48 w-full object-cover mb-5"
                />
                <h3 className="text-lg font-semibold mb-3">{recipe.strMeal}</h3>
                <p className="text-sm text-gray-600 mb-5">
                  {recipe.strInstructions.length > 100
                    ? `${recipe.strInstructions.slice(0, 100)}...`
                    : recipe.strInstructions}
                </p>
                <button
                  onClick={() => handleRecipeClick(recipe.idMeal)}
                  className="px-4 py-2 bg-primary text-white font-medium rounded-full hover:bg-second transition-colors"
                >
                  View Recipe
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No recipes available.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default RecipeList;
