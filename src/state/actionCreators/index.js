import { CREATE_NEW_RECIPE, GET_RECIPE, GET_RECIPE_ID, SAVE_INGREDIENT, SAVE_INSTRUCTION, SAVE_INSTRUCTION_NUMBER, SAVE_INSTRUCTION_VALUE, SAVE_RECIPE_NAME } from "../actionTypes";

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

export const createRecipe = (recipe) => {
    return {
        type: CREATE_NEW_RECIPE,
        payload: {
            recipe_name: recipe.recipe_name,
            ingredients: recipe.ingredients,
            instructions: recipe.instructions
        }
    }
}

export const saveRecipeName = (recipe_name) => {
    return {
        type: SAVE_RECIPE_NAME,
        payload: recipe_name
    }
}

export const saveIngredient = (ingredient) => {
    return {
        type: SAVE_INGREDIENT,
        payload: ingredient
    }
}

export const saveInstructionValue = (instruction_value) => {
    return {
        type: SAVE_INSTRUCTION_VALUE,
        payload: instruction_value
    }
}

export const saveInstructionNumber = (instruction_number) => {
    return {
        type: SAVE_INSTRUCTION_NUMBER,
        payload: instruction_number
    }
}