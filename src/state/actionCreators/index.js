import { GET_RECIPE, GET_RECIPE_ID } from "../actionTypes";

export const getRecipeId = (recipe_id) => {
    return {
        type: GET_RECIPE_ID,
        payload: {
            recipe_id
        },
    };
};

export const getRecipe = (recipe) => {
    return {
        type: GET_RECIPE,
        payload: {
            recipe_name: recipe.recipe_name,
            ingredients: recipe.ingredients,
            instructions: recipe.instructions,
        }
    }
}