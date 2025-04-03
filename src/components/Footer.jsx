import React from "react";
import { Link } from "react-router-dom";
import icon1 from "../assets/Icons/icons8-x.svg";
import icon2 from "../assets/Icons/icons8-instagram.svg";
import icon3 from "../assets/Icons/icons8-facebook.svg";
import icon4 from "../assets/Icons/icons8-tiktok.svg";

function Footer() {
  return (
    <div className="font-inter p-10 bg-gray-300">
      <div className="flex flex-col lg:flex-row md:space-x-10  md:m-auto space-y-10 md:space-y-0">
        {/* Logo and Description */}
        <div className="md:w-4/5 lg:w-1/3 px-5 md:m-auto justify-center">
          <h1 className="text-primary font-bold text-2xl mb-6 md:text-center lg:text-left">
            GLOBE<span className="font-extrabold text-black">BITES</span>
          </h1>
          <p className="text-base md:text-center lg:text-left">
            We started GlobeBites because we love how food tells a story of
            people, places, and traditions. Join us on this delicious journey,
            and let’s taste the globe together!
          </p>
          <div className="flex space-x-3 mt-6 md:justify-center lg:justify-start">
            <img src={icon1} alt="" className="size-10" />
            <img src={icon2} alt="" className="size-10" />
            <img src={icon3} alt="" className="size-10" />
            <img src={icon4} alt="" className="size-10" />
          </div>
        </div>

        <div className="md:flex md:flex-row md:mx-auto md:justify-center md:w-full lg:w-1/3 md:mt-10">
          {/* Quick Links */}
          <div className="flex flex-col md:m-auto justify-center md:w-1/3 items-center space-y-4 text-lg">
            <h2 className="font-medium">Quick Link</h2>
            <Link to="/">Home</Link>
            <Link to="/favorites">Favorites</Link>
            <Link to="/Recipes">Recipe</Link>
          </div>

          {/* Help Section */}
          <div className="flex flex-col text-lg space-y-4 justify-center md:w-1/3 md:m-auto items-center mt-10">
            <h2 className="font-medium">Help</h2>
            <Link>Contact</Link>
            <Link>Support</Link>
            <Link>FQA</Link>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="lg:w-1/2 md:m-auto">
          <h2 className="font-semibold text-center lg:text-left text-2xl mb-5 md:text-center">
            Subscribe Our NewsLetter
          </h2>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
            <input
              type="text"
              placeholder="Your Email"
              className="py-3 px-5 w-full md:w-8/12 outline-none rounded-full md:mr-3"
            />
            <button className="py-2 px-5 bg-primary text-xl text-white font-medium rounded-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
