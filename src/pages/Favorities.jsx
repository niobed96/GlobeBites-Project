import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  // Load favorites from local storage on mount
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleRemoveFavorite = (idMeal) => {
    const updatedFavorites = favorites.filter((fav) => fav.idMeal !== idMeal);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  const handleRecipeClick = (recipeId) => {
    navigate(`/recipe/${recipeId}`);
  };

  return (
    <>
      <Navbar />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Your Favorite Recipes
          </h1>
          {favorites.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {favorites.map((recipe) => (
                <div
                  key={recipe.idMeal}
                  className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition relative"
                >
                  <div onClick={() => handleRecipeClick(recipe.idMeal)}>
                    <img
                      src={recipe.strMealThumb}
                      alt={recipe.strMeal}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-xl font-semibold">{recipe.strMeal}</h3>
                    <p className="text-gray-600">{recipe.strArea}</p>
                  </div>
                  <button
                    onClick={() => handleRemoveFavorite(recipe.idMeal)}
                    className="absolute top-2 right-2 text-red-500 hover:text-red-600 font-semibold"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">
              You haven’t added any recipes to your favorites yet. Go to a
              recipe page and click "Add to Favorites" to get started!
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Favorites;
