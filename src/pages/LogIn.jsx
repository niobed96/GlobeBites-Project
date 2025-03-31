import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function LogIn() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  // Simulate a user database in local storage
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.length === 0) {
      // Predefine a user for testing
      localStorage.setItem(
        "users",
        JSON.stringify([{ username: "user", password: "password" }])
      );
    }
  }, []);

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) =>
        u.username === formData.username && u.password === formData.password
    );

    if (user) {
      login({ username: formData.username });
      navigate("/");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <>
      <div className="flex px-44 my-14 font-inter">
        <div className="bg-bannerlogin w-1/2 h-slvh bg-center bg-cover rounded-xl">
          <h1 className="text-primary font-bold text-2xl p-10">
            GLOBE<span className="font-extrabold text-black">BITES</span>
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-1/2 m-auto px-20"
        >
          <h1 className="text-center font-bold text-xl mb-8">Log In</h1>
          <label htmlFor="username" className="font-normal">
            Email
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter Username"
            value={formData.username}
            onChange={handleChange}
            className="px-5 py-3 border-solid border-2 border-gray-200 rounded-xl bg-gray-100 mt-2 mb-4 outline-none placeholder:text-gray-500 "
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={handleChange}
            className="px-5 py-3 border-solid border-2 border-gray-200 rounded-xl bg-gray-100 mt-2 mb-4 outline-none placeholder:text-gray-500 "
          />
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <button
            type="submit"
            className="bg-primary text-white font-semibold py-2 mt-3 mb-5 text-lg rounded-xl"
          >
            Log in
          </button>
          <h1>
            If you don’t have Account.
            <Link to="/signup" className="text-primary font-bold">
              {" "}
              Sign Up
            </Link>
          </h1>
        </form>
      </div>
    </>
  );
}

export default LogIn;
