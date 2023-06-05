import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useNavigate, Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getRecipeId } from "../state/actionCreators";
import ViewRecipe from "./ViewRecipe";


function BrowseRecipes(props) {
  const [recipes, setRecipes] = useState([]);
  const recipes_url = "http://localhost:9000/api/recipes";

  useEffect(() => {
    axios
      .get(recipes_url)
      .then(res => {
        const recipeData = res.data;
        setRecipes(recipeData);
      })
      .catch(error => console.error(error));
  }, []);
  let navigate = useNavigate();

  const routeChange = recipeId => {
    console.log(typeof recipeId)
    let path = `/browse-recipes/${recipeId}`;
    navigate(path);
    // let arr = path.split('/')
    // let pathId = arr[arr.length - 1];
    // let pathIdNum = parseInt(pathId)
    // props.getRecipeId(pathIdNum)

  };
console.log(props.recipe_id)
  return (
    <div>
      <h2>Browse Recipes</h2>
      <ul>
        {recipes.map(recipe => (
          <div key={recipe.recipe_id}>
            {/* <Link to={`/browse-recipes/${recipe.recipe_id}`}>
            </Link> */}
            <li>{recipe.recipe_name}</li>

            <p>Ingredients: {recipe.ingredients}</p>
            <p>Number of Steps: {recipe.number_of_steps}</p>
            <button id={recipe.recipe_id} onClick={(e) => {
                e.preventDefault();
                props.getRecipeId(e.target.id)
                routeChange(recipe.recipe_id)}}>
              View Recipe
            </button>
          </div>
        ))}
      </ul>
      
    <Routes>
        <Route exact path="/browse-recipes/:id" element={<ViewRecipe recipe_id={props.recipe_id}/>} />
    </Routes>
    </div>
  );
}

const mapStateToProps = state => {
    return ({
        recipe_id: state.recipe_id
    })
}

export default connect(mapStateToProps, {getRecipeId})(BrowseRecipes);