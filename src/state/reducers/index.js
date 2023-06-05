import { combineReducers } from "redux";

import existingRecipeReducer from "./existingRecipeReducer";
import newRecipeReducer from "./newRecipeReducer";

const rootReducer = combineReducers({
    existingRecipeReducer,
    newRecipeReducer
});

export default rootReducer;