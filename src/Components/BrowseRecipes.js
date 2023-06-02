import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import ViewRecipe from "./ViewRecipe";

function BrowseRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [id, setId] = useState();
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

  const routeChange = recipe_id => {
    console.log(typeof recipe_id) // number
    let path = `/browse-recipes/${recipe_id}`;
    navigate(path);
    let arr = path.split('/') // ["browse-recipes", "1"]
    let pathId = arr[arr.length - 1]; // "1"
    let pathIdNum = parseInt(pathId) // 1
    console.log(pathIdNum) // 1
    setId(pathIdNum) 
    console.log(id) // undefined
  };

  console.log(recipes);

  return (
    <div>
      <h2>Browse Recipes</h2>
      <ul>
        {recipes.map(recipe => (
          <div key={recipe.recipe_id}>
            {console.log(recipe.recipe_id)}
            <Link to={`/browse-recipes/${recipe.recipe_id}`}>
              <li>{recipe.recipe_name}</li>
            </Link>
            <p>Ingredients: {recipe.ingredients}</p>
            <p>Number of Steps: {recipe.number_of_steps}</p>
            <button onClick={() => routeChange(recipe.recipe_id)}>
              View Recipe
            </button>
          </div>
        ))}
      </ul>
      
    <Routes>
        <Route path="/browse-recipes/:id" element={<ViewRecipe recipe_id={id} />} />
    </Routes>
    </div>
  );
}

export default BrowseRecipes;