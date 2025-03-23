import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        setRecipe(response.data.meals[0]);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };
    fetchRecipe();
  }, [id]);

  if (!recipe) return <p className="text-center text-gray-600">Loading...</p>;

  const ingredients = Array.from({ length: 20 }, (_, i) => ({
    name: recipe[`strIngredient${i + 1}`],
    measure: recipe[`strMeasure${i + 1}`],
  })).filter((ing) => ing.name);

  return (
    <>
      <div className="px-36 py-16 mx-auto bg-white rounded-lg overflow-hidden">
        <h1 className="text-4xl text-green-700 font-semibold my-10">
          {recipe.strMeal}
        </h1>
        <p className="text-gray-600 mb-4">
          {recipe.strArea} • {recipe.strCategory}
        </p>
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-screen bg-contain rounded-xl"
        />
        <div className="p-4 md:p-5">
          <p className="text-gray-600 italic mb-6">
            {recipe.strInstructions.slice(0, 100)}...
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Ingredients
          </h2>
          <ul className="text-gray-600 mb-6 list-none">
            {ingredients.map((ing, index) => (
              <li key={index} className="flex items-center mb-2">
                <span>
                  {ing.measure} {ing.name}
                </span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Instructions
          </h2>
          <ol className="text-gray-600 mb-6 list-decimal list-inside">
            {recipe.strInstructions
              .split(". ")
              .filter((step) => step)
              .map((step, index) => (
                <li key={index}>{step}</li>
              ))}
          </ol>

          <button className="text-green-700 hover:text-green-800 font-semibold">
            Add to Favorites
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RecipeDetails;
