import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import recipeDate from "../data.json";
import { Link } from "react-router-dom";

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeDate);
  }, []);
  return (
    <>
      <div>
        <h1 className="text-4xl font-semibold text-center my-7 font-inter">
          Find recipe
        </h1>
      </div>
      <SearchBar />
      <div className="flex mx-36 justify-between items-center">
        <div className="flex flex-col w-1/2">
          <h2 className="text-6xl font-bold mb-6 ">
            Discover the World’s Flavors
          </h2>
          <p className="text-2xl w-11/12 mb-6">
            Explore dishes from different countries and bring global cuisine to
            your kitchen
          </p>
          <button className="mr-auto bg-Third text-white px-10 py-2 text-2xl rounded-full font-medium">
            Explore
          </button>
        </div>
        <div className="w-3/5">
          <img
            src="/public/Images/lasagna.png"
            alt=""
            className="ml-auto w-12/12"
          />
        </div>
      </div>
      <div className="mx-24 my-10">
        <h2 className="text-2xl font-bold mb-5">Recommended Recipes</h2>
        <div className="flex space-x-10">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <div
                key={recipe.id}
                className="p-5 rounded-xl shadow-lg bg-slate-100 w-3/5"
              >
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="rounded-xl h-64 mb-7"
                />
                <div>
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-base font-semibold">{recipe.title}</h2>
                    <Link className="px-3 py-1 bg-primary hover:bg-second text-center text-white font-medium rounded-full">
                      View Recipe
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No Recommended Recipes</p>
          )}
        </div>
      </div>
      <div className="mx-36 my-20 font-inter">
        <h2 className="text-2xl font-semibold">About Us</h2>
        <div className="flex justify-between my-20">
          <div className="bg-Third items-center justify-center -rotate-12 p-3 rounded-3xl w-2/5">
            <img
              src="/public/Images/—Pngtree—healthy food_3776802.png"
              alt=""
              className="m-auto"
            />
          </div>
          <div className="w-2/5">
            <div>
              <h3 className="text-lg font-bold mb-3">Mission</h3>
              <p className="text-lg">
                At GlobeBites, we believe food is a universal language that
                connects us all. Our mission is simple: to bring the world’s
                flavors to your kitchen, one dish at a time. Whether you’re
                craving sushi from Japan, tacos from Mexico, or a hidden gem
                from your own backyard, we’re here to help you explore, cook,
                and share the tastes that make every culture unique.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 mt-12">What We offer</h3>
              <p className="text-lg">
                With GlobeBites, you can search for dishes by country, save your
                favorites for later, and even contribute your own recipes to our
                growing community. From the "Recommended Recipes" to a treasure
                trove of global cuisines, we’re your go to spot for culinary
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
