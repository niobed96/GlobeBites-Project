import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Validation
    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Check if username or email already exists
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some(
      (u) => u.username === formData.username || u.email === formData.email
    );

    if (userExists) {
      setError("Username or email already exists.");
      return;
    }

    // Add new user to local storage
    const newUser = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // Log the user in
    login({ username: formData.username, email: formData.email });
    navigate("/");
  };

  return (
    <>
      <div className="md:flex md:px-44 my-14 font-inter">
        <div className="bg-bannerImg w-1/2 h-slvh hidden md:block bg-center bg-cover rounded-xl">
          <Link to="/">
            <button className="text-primary font-bold text-2xl p-10">
              GLOBE<span className="font-extrabold text-black">BITES</span>
            </button>
          </Link>
        </div>
        <Link to="/" className="flex justify-center items-center md:hidden">
          <button className="text-primary font-bold text-2xl p-10">
            GLOBE<span className="font-extrabold text-black">BITES</span>
          </button>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-4/5 md:w-1/2 m-auto md:px-20"
        >
          <h1 className="text-center font-bold text-xl mb-8">
            <span className="text-Third">Sign Up</span> for GlobeBites
          </h1>
          <label htmlFor="username" className="font-normal">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Your Name"
            className="px-5 py-3 border-solid border-2 border-gray-200 rounded-xl bg-gray-100 mt-2 mb-4 outline-none placeholder:text-gray-500"
          />
          <label htmlFor="email" className="font-normal">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Example@email.com"
            className="px-5 py-3 border-solid border-2 border-gray-200 rounded-xl bg-gray-100 mt-2 mb-4 outline-none placeholder:text-gray-500"
          />
          <label htmlFor="password" className="font-normal">
            Create Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter Your Password"
              value={formData.password}
              onChange={handleChange}
              className="px-5 py-3 border-solid border-2 border-gray-200 rounded-xl bg-gray-100 mt-2 mb-4 outline-none placeholder:text-gray-500 w-full pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-1/2 right-4 flex items-center text-gray-500 hover:text-gray-700"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <label htmlFor="confirmPassword" className="font-normal">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="px-5 py-3 border-solid border-2 border-gray-200 rounded-xl bg-gray-100 mt-2 mb-4 outline-none placeholder:text-gray-500 w-full pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-1/2 right-4 flex items-center text-gray-500 hover:text-gray-700"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <button className="bg-black text-white font-semibold py-2 mt-3 mb-5 text-lg rounded-xl">
            Sign Up
          </button>
          <h1 className="text-center">
            If you already have an account.{" "}
            <Link to="/login" className="text-primary font-bold">
              Log in
            </Link>
          </h1>
        </form>
      </div>
    </>
  );
}

export default SignUp;
