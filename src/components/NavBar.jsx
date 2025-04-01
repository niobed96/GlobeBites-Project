import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the menu

  return (
    <>
      <header className="font-inter bg-white my-14">
        <div className="flex justify-between items-center mx-4 md:mx-16 my-4 px-4">
          {/* Logo */}
          <h1 className="text-primary font-bold text-2xl">
            GLOBE<span className="font-extrabold text-black">BITES</span>
          </h1>

          {/* Hamburger Menu Button */}
          <button
            className="block md:hidden text-black focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="black"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12" // Close icon
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
                }
              ></path>
            </svg>
          </button>

          {/* Menu for Larger Screens */}
          <nav className="hidden md:flex space-x-7 items-center text-base">
            <ul className="flex space-x-7 items-center">
              <li className="font-medium hover:text-gray-600">
                <Link to="/">Home</Link>
              </li>
              <li className="font-medium hover:text-gray-600">
                <Link to="/Recipes">Recipes</Link>
              </li>
              <li className="font-medium hover:text-gray-600">
                <Link to="/Favorites">Favorites</Link>
              </li>
              <li className="font-medium hover:text-gray-600">
                <Link to="/Submit-recipe">Submit Recipe</Link>
              </li>
              <li className="font-bold bg-primary text-white px-5 py-3 rounded-xl text-base hover:bg-second">
                <Link to="/Login">Get Started</Link>
              </li>
            </ul>
          </nav>

          {/* Dropdown Menu for Smaller Screens */}
          <nav
            className={`${
              isOpen ? "block" : "hidden"
            } absolute bg-white text-black w-full left-0 top-16 space-y-4 p-4 md:hidden mt-14 z-20`}
          >
            <ul>
              <li className="font-medium hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md">
                <Link to="/">Home</Link>
              </li>
              <li className="font-medium hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md">
                <Link to="/Recipes">Recipes</Link>
              </li>
              <li className="font-medium hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md">
                <Link to="/Favorites">Favorites</Link>
              </li>
              <li className="font-medium hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md">
                <Link to="/Submit-recipe">Submit Recipe</Link>
              </li>
              <li className="font-bold bg-primary text-white hover:text-white px-5 py-3 rounded-xl text-base hover:bg-second w-1/3">
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
