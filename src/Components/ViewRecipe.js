import React, {useState, useEffect} from "react";

import axios from "axios";

function ViewRecipe(props) {
    const { recipe_id } = props 
    const [recipe, setRecipe] = useState({
        recipe_name: '',
        ingredients: '',
        instruction_value: [],
        instruction_number: []
    })
    useEffect(() => {
        async function getRequest () {
            console.log(recipe_id)
            await axios.get(`http://localhost:9000/api/recipes/${recipe_id}`)
            .then(res => {
                console.log(res.data)
                const recipeData = res.data;
                setRecipe(recipeData)
            })
            .catch(error => console.error(error));
        }
        getRequest()
    }, []) //eslint-disable-line
    console.log(recipe)
    return(
        <div>
            <h1>{recipe.recipe_name}</h1>
            <ul>Ingredients:
                <li>{recipe.ingredients}</li>
            </ul>
            <ul>Instructions:

            </ul>

        </div>
    )
}

export default ViewRecipe;