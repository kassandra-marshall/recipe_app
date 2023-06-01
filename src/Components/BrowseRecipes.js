import React, {useState, useEffect} from "react";
import axios from 'axios'
import {Routes, Route, useNavigate, Link} from 'react-router-dom'
import ViewRecipe from "./ViewRecipe";

function BrowseRecipes() {
    const [recipes, setRecipes] = useState([])
    const recipes_url = 'http://localhost:9000/api/recipes'
        useEffect(() => {
            axios.get(recipes_url)
                .then(res => {
                    const recipeData = res.data
                    setRecipes(recipeData)
                })
                .catch(error => console.error(error));
        }, [])
        let navigate = useNavigate()
        const routeChange = (recipe_id) => {
            let path = `/browse-recipes/${recipe_id}`
            navigate(path)
        }
        console.log(recipes)
    return (
        <div>
            <h2>Browse Recipes</h2>
            <ul>
                {recipes.map(recipe => {
                    console.log(recipe)
                    return (
                        <div key={recipe.recipe_id}>
                            <Link to={`${recipe.recipe_name}`}/><li>{recipe.recipe_name}</li> <Link/>
                            <p>Ingredients: {recipe.ingredients}</p>
                            <p>Number of Steps: {recipe.number_of_steps}</p>
                            <button onClick={() => {routeChange(recipe.recipe_id)}}>View Recipe</button>
                            <Routes>
                                <Route exact path={`${recipe.recipe_name}`} element={<ViewRecipe recipe_id={recipe.recipe_id}/>}/>
                            </Routes>
                            
                        </div>
                        
                    )
                })}
            </ul>
        </div>
    )
}

export default BrowseRecipes;