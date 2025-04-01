import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import recipeDate from "../data.json";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setRecipes(recipeDate);
  }, []);

  const handleRecipeClick = (recipeId) => {
    navigate(`/recommended-recipe/${recipeId}`);
  };

  return (
    <>
      <Navbar />
      <div>
        <h1 className="text-4xl font-semibold text-center my-7 font-inter">
          Find recipe
        </h1>
      </div>
      <SearchBar />
      {/* Hello Section */}
      <div className="flex flex-col md:flex-row md:mx-44 justify-between items-center sm:m-auto px-4">
        <div className="flex flex-col text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Discover the <br /> World’s Flavors
          </h2>
          <p className="text-lg md:text-2xl mb-6">
            Explore dishes from different countries and <br /> bring global
            cuisine to your kitchen
          </p>
          <Link to="/Recipes" className="m-auto md:m-0">
            <button className="bg-Third text-white px-10 md:px-20 py-2 text-lg md:text-2xl rounded-full font-medium">
              Explore
            </button>
          </Link>
        </div>
        <div className="hidden md:block md:w-6/12  mt-8 md:mt-0">
          <img
            src="/public/Images/lasagna.png"
            alt=""
            className="w-full md:w-12/12 rounded-xl"
          />
        </div>
      </div>

      {/* Recommended Recipes Section */}
      <div className="mx-4 md:mx-24 my-10">
        <h2 className="text-2xl md:text-4xl font-bold mb-5 text-center md:text-left">
          Recommended Recipes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <div
                key={recipe.id}
                className="p-5 rounded-xl shadow-lg bg-slate-100"
              >
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="rounded-xl h-72 w-full object-cover mb-7"
                />
                <div>
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-base font-semibold">{recipe.title}</h2>
                    <button
                      onClick={() => handleRecipeClick(recipe.id)}
                      className="px-3 py-1 bg-primary hover:bg-se text-center text-white font-medium rounded-full"
                    >
                      View Recipe
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No Recommended Recipes</p>
          )}
        </div>
      </div>

      {/* About Section */}
      <div className="mx-4 md:mx-36 my-20 font-inter">
        <h2 className="text-2xl md:text-4xl font-semibold text-center md:text-left">
          About Us
        </h2>
        <div className="flex flex-col md:flex-row justify-between my-20 items-center">
          <div className="bg-Third items-center justify-center -rotate-12 p-3 rounded-3xl w-4/5 md:w-2/5 mb-10 md:mb-0">
            <img
              src="/public/Images/—Pngtree—healthy food_3776802.png"
              alt=""
              className="m-auto"
            />
          </div>
          <div className="w-full md:w-2/5">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-3">Mission</h3>
              <p className="text-base md:text-lg">
                At GlobeBites, we believe food is a universal language that
                connects us all. Our mission is simple: to bring the world’s
                flavors to your kitchen, one dish at a time. Whether you’re
                craving sushi from Japan, tacos from Mexico, or a hidden gem
                from your own backyard, we’re here to help you explore, cook,
                and share the tastes that make every culture unique.
              </p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-3 mt-12">
                What We Offer
              </h3>
              <p className="text-base md:text-lg">
                With GlobeBites, you can search for dishes by country, save your
                favorites for later, and even contribute your own recipes to our
                growing community. From the "Recommended Recipes" to a treasure
                trove of global cuisines, we’re your go-to spot for culinary
                inspiration, no passport required!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
