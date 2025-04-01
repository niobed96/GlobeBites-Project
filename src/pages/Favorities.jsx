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
        <div className="container mx-auto px-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Your Favorite Recipes
          </h1>
          {favorites.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {favorites.map((recipe) => (
                <div
                  key={recipe.idMeal}
                  className="p-6 cursor-pointer hover:shadow-lg transition rounded-2xl bg-white shadow-lg"
                >
                  <div>
                    <img
                      src={recipe.strMealThumb}
                      alt={recipe.strMeal}
                      className="w-full h-72 object-cover rounded-md mb-4"
                      onClick={() => handleRecipeClick(recipe.idMeal)}
                    />
                    <div>
                      <div>
                        <h3 className="text-xl font-semibold text-center text-Third">
                          {recipe.strMeal}
                        </h3>
                        <p className="text-gray-600 text-center">
                          {recipe.strArea}
                        </p>
                      </div>
                      <div className=" w-full flex">
                        <button
                          onClick={() => handleRemoveFavorite(recipe.idMeal)}
                          className=" text-white mt-4 bg-black hover:bg-red-500 font-semibold px-6 rounded-full py-1 m-auto text-center"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
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
