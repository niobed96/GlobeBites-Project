import "./index.css";
import Favorities from "./pages/Favorities";
import Home from "./pages/Home";
import RecipeList from "./pages/RecipeList";
import { Route, Routes } from "react-router-dom";
import SubmitRecipe from "./pages/SubmitRecipe";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import SearchResults from "./pages/SearchResults";
import RecipeDetails from "./components/RecipeDetails";
import RecommendedRecipe from "./pages/RecommendedRecipe";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Recipes" element={<RecipeList />} />
          <Route
            path="/favorites"
            element={
              <ProtectedRoute>
                <Favorities />
              </ProtectedRoute>
            }
          />
          <Route
            path="/submit-recipe"
            element={
              <ProtectedRoute>
                <SubmitRecipe />
              </ProtectedRoute>
            }
          />
          <Route path="/Login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route
            path="/recommended-recipe/:id"
            element={<RecommendedRecipe />}
          />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
