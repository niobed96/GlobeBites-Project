import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import recipeData from "../data.json";

const RecommendedRecipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const findRecipe = recipeData.find((r) => r.id === parseInt(id));
    setRecipe(findRecipe || null);
  }, [id]);

  if (!recipe) return <p className="text-center text-gray-600">Loading...</p>;

  return (
    <div className="m-20">
      <div>
        <div>
          <h1 className="text-4xl text-green-700 font-semibold my-10">
            {recipe.title}
          </h1>
          <img
            src={recipe.image}
            alt=""
            className="w-4/5 h3/4 mb-5 rounded-xl shadow-lg"
          />
          <p className="font-medium mb-20 text-lg">{recipe.summary}</p>
          <div className="mb-20">
            <h2 className="font-bold mb-5 text-2xl">Ingredients</h2>
            <ul className="text-lg">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-5 text-2xl">Instructions</h2>
            <ul className="text-lg">
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedRecipe;
