import React from "react";
import { Link } from "react-router-dom";
import icon1 from "../assets/Icons/icons8-x.svg";
import icon2 from "../assets/Icons/icons8-instagram.svg";
import icon3 from "../assets/Icons/icons8-facebook.svg";
import icon4 from "../assets/Icons/icons8-tiktok.svg";

function Footer() {
  return (
    <div className="font-inter p-10 bg-gray-300">
      <div className="flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0">
        {/* Logo and Description */}
        <div className="md:w-2/5 px-5">
          <h1 className="text-primary font-bold text-2xl mb-6">
            GLOBE<span className="font-extrabold text-black">BITES</span>
          </h1>
          <p className="text-base">
            We started GlobeBites because we love how food tells a story of
            people, places, and traditions. Join us on this delicious journey,
            and let’s taste the globe together!
          </p>
          <div className="flex space-x-3 mt-6">
            <img src={icon1} alt="" className="size-10" />
            <img src={icon2} alt="" className="size-10" />
            <img src={icon3} alt="" className="size-10" />
            <img src={icon4} alt="" className="size-10" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col m-auto justify-center items-center md:w-1/6 space-y-4 text-lg">
          <h2 className="font-medium">Quick Link</h2>
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/Recipes">Recipe</Link>
        </div>

        {/* Help Section */}
        <div className="flex flex-col md:w-1/6 text-lg space-y-4 justify-center items-center">
          <h2 className="font-medium">Help</h2>
          <Link>Contact</Link>
          <Link>Support</Link>
          <Link>FQA</Link>
        </div>

        {/* Newsletter Subscription */}
        <div className="md:w-3/6">
          <h2 className="font-semibold text-2xl mb-5">
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
