import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="font-inter">
        <div className="flex flex-row mx-16 my-10 px-4">
          <h1 className="text-primary font-bold text-2xl">
            GLOBE<span className="font-extrabold text-black">BITES</span>
          </h1>
          <nav className="ml-auto hidden md:flex">
            <ul className="flex space-x-7 items-center text-base">
              <li className="font-medium hover:text-gray-600">
                <Link to="/">Home</Link>
              </li>
              <li className="font-medium hover:text-gray-600">
                <Link to="/Recipes">Recipes</Link>
              </li>
              <li className="font-medium hover:text-gray-600">
                <Link to="/Favorites">Favorities</Link>
              </li>
              <li className="font-medium hover:text-gray-600">
                <Link to="/Submit-recipe">Submit Recipe</Link>
              </li>
              <li className="font-bold bg-primary text-white px-5 py-3 rounded-xl text-base hover:bg-second">
                <Link to="/Login">Get Started</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
