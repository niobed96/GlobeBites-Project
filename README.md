# GlobeBites

## Overview

GlobeBites is a web application built with React that allows users to explore recipes from around the world. Users can search for recipes by country, ingredient, or recipe name, view detailed recipe information, and eventually submit their own recipes. The app integrates with **TheMealDB API** for recipe data and is designed to support a custom backend API for user-submitted recipes and user authentication.

## Features

- **Search Recipes**: Search for recipes by country (e.g., "Indian"), ingredient (e.g., "chicken"), or recipe name (e.g., "Chicken Tikka Masala") using TheMealDB API.
- **Separate Search Results Page**: Results are displayed on a dedicated `/search` page in a 3-column grid.
- **Recipe Details**: View detailed recipe information, including ingredients, instructions, and images.
- **Responsive Design**: The app is styled to be responsive across devices, with a clean and modern UI.
- **Navigation**: Includes a navbar with links to Home, Recipes, Favorites, Submit Recipe, and user authentication pages (Login/Signup).

## Tech Stack

- **Frontend**: React, React Router
- **API**: TheMealDB (free recipe API)
- **Styling**: Plain CSS (no Tailwind, per design requirements)
- **Dependencies**: `axios` (for API requests), `react-router-dom` (for routing)

## Project Structure
