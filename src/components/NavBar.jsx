import React from "react";
import "../index.css";
// import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="font-inter">
        <div className="flex flex-row m-16">
          <h1 className="text-primary font-bold text-2xl">
            GLOBE<span className="font-extrabold text-black">BITES</span>
          </h1>
          <nav className="ml-auto">
            <ul className="flex space-x-7 items-center text-lg">
              <li className="font-medium hover:text-gray-600">Home</li>
              <li className="font-medium hover:text-gray-600">Recipes</li>
              <li className="font-medium hover:text-gray-600">Favorities</li>
              <li className="font-medium hover:text-gray-600">Submit Recipe</li>
              <li className="font-bold bg-primary text-white px-5 py-2 rounded-xl text-lg hover:bg-second">
                Get Started
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
