import { CREATE_NEW_RECIPE } from "../actionTypes";

export const initialState = {
    recipe_name: '',
    ingredients: '',
    instructions: [
        {instruction_number: []},
        {instruction_value: []}
    ]
}

export default function createNewRecipe (state = initialState, action) {
    switch (action.type) {
        case CREATE_NEW_RECIPE: {
            return {
                ...state,
                recipe_name: action.payload.recipe_name,
                ingredients: action.payload.ingredients,
                instructions: [
                    {instruction_number: action.payload.instructions.instruction_number},
                    {instruction_value: action.payload.instructions.instruction_value}
                ]
            }
        }
        default: {
            return state;
        }
    }
}