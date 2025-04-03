import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

function SubmitRecipe() {
  const [formData, setFormData] = useState({
    dishName: "",
    countryName: "",
    cookingTime: "",
    mealTime: "",
    difficulty: "",
    ingredients: "",
    instructions: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Basic validation
    if (
      !formData.dishName ||
      !formData.countryName ||
      !formData.mealTime ||
      !formData.difficulty ||
      !formData.ingredients ||
      !formData.instructions
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      // Submit to your custom backend API
      await axios.post("http://localhost:5173/api/recipes", formData);
      setSuccess("Recipe submitted successfully!");
      setTimeout(() => {
        navigate("/");
      }, 2000); // Redirect to Home after 2 seconds
    } catch (err) {
      console.error("Error submitting recipe:", err);
      setError("Failed to submit recipe. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="md:px-32 mb-32 font-inter">
        <h1 className="text-3xl font-semibold pl-16 md:pl-0">
          Share Your Recipe
        </h1>
        <form className="px-16 mt-14 mb-12" onSubmit={handleSubmit}>
          <div className="grid flex flex-col lg:grid-cols-2 lg:gap-x-32 lg:gap-y-7 gap-y-4 mb-12">
            <div className="flex flex-col">
              <label htmlFor="dishname" className="font-medium">
                Dish Name
              </label>
              <input
                type="text"
                id="dishname"
                name="dishName"
                value={formData.dishName}
                onChange={handleChange}
                className="bg-gray-200 p-3 rounded-xl outline-none my-3"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="country" className="font-medium">
                Country Name
              </label>
              <input
                type="text"
                id="country"
                name="countryName"
                value={formData.countryName}
                onChange={handleChange}
                className="bg-gray-200 p-3 rounded-xl outline-none my-3"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="difficulty" className="font-medium">
                Difficulty
              </label>
              <select
                id="difficulty"
                name="difficulty"
                value={formData.difficulty}
                onChange={handleChange}
                className="bg-gray-200 p-3 rounded-xl outline-none my-3"
              >
                <option value="">Select Difficulty</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="mealTime" className="font-medium">
                Meal Time
              </label>
              <select
                id="mealTime"
                name="mealTime"
                value={formData.mealTime}
                onChange={handleChange}
                className="bg-gray-200 p-3 rounded-xl outline-none my-3"
              >
                <option value="">Select Meal Time</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Snack">Snack</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="cookingTime" className="font-medium">
                Cooking Time
              </label>
              <input
                type="text"
                id="cookingTime"
                name="cookingTime"
                value={formData.cookingTime}
                onChange={handleChange}
                className="bg-gray-200 p-3 rounded-xl outline-none my-3"
              />
            </div>
            <div></div>
            <div className="flex flex-col">
              <label htmlFor="ingredients" className="font-medium">
                Ingredients
              </label>
              <textarea
                name="ingredients"
                id="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                className="bg-gray-200 p-3 h-64 rounded-xl outline-none my-3"
              ></textarea>
            </div>
            <div className="flex flex-col">
              <label htmlFor="instructions" className="font-medium">
                Instructions
              </label>
              <textarea
                name="instructions"
                id="instructions"
                value={formData.instructions}
                onChange={handleChange}
                className="bg-gray-200 p-3 h-64 rounded-xl outline-none my-3"
              ></textarea>
            </div>
          </div>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          {success && (
            <p className="text-green-500 text-center mb-4">{success}</p>
          )}
          <button className="bg-Third text-white text-lg font-normal px-7 py-2 rounded-lg">
            Submit Recipe
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default SubmitRecipe;
