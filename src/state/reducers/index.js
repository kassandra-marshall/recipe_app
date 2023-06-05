import { GET_RECIPE_ID, GET_RECIPE } from "../actionTypes";

export const initialState = {
    recipe_id: 0,
    recipe_name: '',
    ingredients: '',
    instructions: [],
}

export default function getRecipeInfo(state = initialState, action) {
    switch (action.type) {
        case GET_RECIPE_ID: {
           return {
            ...state,
            recipe_id: action.payload.recipe_id
           };
        }
        case GET_RECIPE: {
            return {
                ...state,
                recipe_name: action.payload.recipe_name,
                ingredients: action.payload.ingredients,
                instructions: action.payload.instructions
            }
        }
        default: {
            return state;
        }
    }
}