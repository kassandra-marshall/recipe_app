import { 
    CREATE_NEW_RECIPE, 
    SAVE_INGREDIENT, 
    SAVE_INSTRUCTION, 
    SAVE_INSTRUCTION_NUMBER, 
    SAVE_INSTRUCTION_VALUE, 
    SAVE_RECIPE_NAME 
} from "../actionTypes";

export const initialState = {
    recipe_name: '',
    ingredients: [],
    instructions: {
        instruction_number: [],
        instruction_value: []
    }
}

export default function createNewRecipe (state = initialState, action) {
    switch (action.type) {
        case CREATE_NEW_RECIPE: {
            return {
                ...state,
                recipe_name: action.payload.recipe_name,
                ingredients: action.payload.ingredients,
                instructions: {
                    instruction_number: action.payload.instructions.instruction_number,
                    instruction_value: action.payload.instructions.instruction_value
                }
            }
        }
        case SAVE_RECIPE_NAME: {
            return {
                ...state,
                recipe_name: action.payload
            }
        }
        case SAVE_INGREDIENT: {
            return {
                ...state,
                ingredients: action.payload
            }
        }
        case SAVE_INSTRUCTION: {
            return {
                ...state,
                instructions: {
                    instruction_number: action.payload.instruction_number,
                    instruction_value: action.payload.instruction_value
                }
            }
        }
        default: {
            return state;
        }
    }
}