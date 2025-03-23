import Navbar from "./components/NavBar";
import "./index.css";
import FavoritiesPage from "./pages/FavoritiesPage";
import Home from "./pages/Home";
import RecipeList from "./pages/RecipeList";
import { Route, Routes } from "react-router-dom";
import SubmitRecipe from "./pages/SubmitRecipe";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import SearchResults from "./pages/SearchResults";
import RecipeDetails from "./components/RecipeDetails";
import RecommendedRecipe from "./pages/RecommendedRecipe";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Recipes" element={<RecipeList />} />
        <Route path="/Favorities" element={<FavoritiesPage />} />
        <Route path="/Submit-recipe" element={<SubmitRecipe />} />
        <Route path="/Login" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/recommended-recipe/:id" element={<RecommendedRecipe />} />
      </Routes>
    </>
  );
}

export default App;
