import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );
        const data = await response.json();

        if (data.meals) {
          setRecipes(data.meals);
        } else {
          setRecipes([]);
        }
      } catch (err) {
        console.error("Error fetching recipes:", err);
        setError("Failed to fetch recipes. Please try again later.");
      } finally {
        setLoading(false);
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
      <div className="mx-4 md:mx-12 lg:mx-24 my-10">
        {/* Recipe of the Day Section */}
        <h1 className="text-2xl md:text-3xl font-bold">Recipe of the Day</h1>
        <div className="flex flex-col lg:flex-row bg-gray-100 w-full lg:w-3/4 p-5 rounded-2xl mt-5 mb-14">
          <img
            src="/Images/Chicken Tikka Masala.jpg"
            alt="Chicken Tikka Masala"
            className="w-full lg:w-2/5 rounded-2xl h-60 lg:h-80 object-cover"
          />
          <div className="mt-5 lg:mt-0 lg:ml-10">
            <h1 className="text-xl md:text-2xl font-semibold mb-5">
              Chicken Tikka Masala
            </h1>
            <div className="flex flex-wrap gap-3 mb-5">
              <p className="bg-gray-300 px-5 py-1 rounded-xl">India</p>
              <p className="bg-gray-300 px-5 py-1 rounded-xl">Dinner</p>
              <p className="bg-gray-300 px-5 py-1 rounded-xl">45 Min</p>
              <p className="bg-gray-300 px-5 py-1 rounded-xl">Medium</p>
            </div>
            <p className="font-normal pr-0 lg:pr-8 mb-5">
              Savor the taste of India with Chicken Tikka Masala: succulent
              chicken pieces marinated and grilled, then nestled in a creamy
              tomato sauce spiced with garam masala, cumin, and coriander.
            </p>
            <button className="bg-Third text-black font-medium px-6 py-2 rounded-full">
              View Recipe
            </button>
          </div>
        </div>

        {/* Explore Recipes Section */}
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
          Explore Recipes
        </h2>
        {loading ? (
          <p className="text-center text-gray-600">Loading recipes...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : recipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
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
