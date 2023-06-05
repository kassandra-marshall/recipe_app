import { Routes, Route, Link } from "react-router-dom";
import BuildRecipe from "./Components/BuildRecipe";
import "./App.css";
import BrowseRecipes from "./Components/BrowseRecipes";
import ViewRecipe from "./Components/ViewRecipe";
import Home from "./Components/Home";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Recipe Guide</h1>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/build-recipe">Build Recipe</Link>
        <Link to="/browse-recipes">Browse Recipes</Link>
        <Link to="/grocery-list">Grocery List</Link>
        <Link to="/unit-conversions">Unit Conversions</Link>
        <Link to="/saved-recipes">Saved Recipes</Link>
        <Link to="/about">About</Link>
      </nav>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/build-recipe" element={<BuildRecipe />} />
      <Route exact path="/browse-recipes/:id" element={<ViewRecipe />} />
      <Route path="/browse-recipes/*" element={<BrowseRecipes />} />
    </Routes>
    </div>
  );
}
export default App;