import { Routes, Route, Link } from "react-router-dom";
import BuildRecipe from "./Components/BuildRecipe";
import "./App.css";
import BrowseRecipes from "./Components/BrowseRecipes";
import ViewRecipe from "./Components/ViewRecipe";
import Home from "./Components/Home";
import { RenderRecipe } from "./Components/BuildRecipe"
import { connect } from "react-redux";

function App(props) {
  console.log(props);
  const recipe = {
    recipe_name: props.recipe_name,
    ingredients: props.ingredients,
    instructions: {
      instruction_number: props.instruction_number,
      instruction_value: props.instruction_value
    }
  }

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
    <RenderRecipe recipe={recipe}/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    recipe_name: state.newRecipeReducer.recipe_name,
    ingredients: state.newRecipeReducer.ingredients,
    instruction_number: state.newRecipeReducer.instructions.instruction_number,
    instruction_value: state.newRecipeReducer.instructions.instruction_value
  }
}

export default connect(mapStateToProps)(App);