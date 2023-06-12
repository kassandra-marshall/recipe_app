import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createRecipe, saveIngredient, saveInstructionNumber, saveInstructionValue, saveRecipeName } from "../state/actionCreators";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function RenderRecipe(props) {
  const { recipe } = props;
  console.log('its working');
  console.log(recipe);
  return (
    <div>
      <h3>Recipe Name:</h3>
      {recipe.recipe_name ? <h3>{recipe.recipe_name}</h3> : 'test'}
      <p>Ingredients:</p>
      {recipe.ingredients ? recipe.ingredients.map(ingredient => {
        return(
          <ul>
            <li>{ingredient}</li>
          </ul> 
        )
      }) : null}
      <p>Instructions: </p>
      {recipe.instructions.instruction_number ? recipe.instructions.instruction_number.map(number => {
        return (
          <ul>
            <li>{number}</li>
          </ul>
        )
      }) : null}
      {recipe.instructions.instruction_value ? recipe.instructions.instruction_value.map(value => {
        return (
          <ul>
            <li>{value}</li>
          </ul>
        )
      }) : null}
    </div>
  )
}

function BuildRecipe(props) {
  const url = 'http://localhost:9000/api/recipes';
  const [ingredients, setIngredients] = useState([])
  const [instructionsV, setInstructionsV] = useState([])
  const [instructionsN, setInstructionsN] = useState([])
  const [data, setData] = useState({
    recipe_name: '',
    ingredients: [],
    instruction_number: [],
    instruction_value: []
  })
  
  const viewRecipeButton = () => {
    // axios.post(url)
    //   .then(res => console.log(res))
    //   .catch(err => console.error(err))
    console.log(props);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    console.log(ingredients.toString());
  }
  useEffect(() => {
    props.saveIngredient(ingredients);
  }, [ingredients.length])
  
  const submitIngredient = (e) => {
    e.preventDefault();
    setIngredients(arr => [...arr, data.ingredients])
    props.saveIngredient(ingredients);
  }

  useEffect(() => {
    props.saveInstructionNumber(instructionsN);
  }, [instructionsN])

  useEffect(() => {
    props.saveInstructionValue(instructionsV);
  }, [instructionsV])

  const submitInstruction = (e) => {
    e.preventDefault();
    console.log('data', data);
    setInstructionsN(arr => [...arr, data.instruction_number])
    console.log('instructionsNumber', instructionsN);
    setInstructionsV(arr => [...arr, data.instruction_value])
    console.log('instructionsValue', instructionsV);
    props.saveInstructionNumber(instructionsN);
    props.saveInstructionValue(instructionsV);
    // props.saveInstructionNumber(data.instruction_number);
    // props.saveInstructionValue(data.instruction_value);
    console.log('props.instructions', props.instructions);

  }

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const saveNameClick = (e) => {
    e.preventDefault();
    props.saveRecipeName(data.recipe_name)
  }

  // const editNameClick = (e) => {
  //   e.preventDefault();
  //   return (
  //     <div>
  //       <input type="text" name="recipe_name" onChange={e => {handleChange(e)}}/>
  //     </div>
  //   )
  // }

    return (
      <div>
        <header>
          <h2>Recipe Builder</h2>
        </header>
        <div>
          <form>
            <label>Recipe Name</label>
            <input type="text" name="recipe_name" className="recipe_name" onChange={e => {handleChange(e)}}/>
            <button onClick={(e) => {saveNameClick(e)}}>Save Name</button>
            <label>Ingredients</label>
            <input type="text" name="ingredients" onChange={e => {handleChange(e)}}/>
            <button onClick={submitIngredient}>Submit Ingredients</button>
            <label>Step Number</label>
            <input type="number" name="instruction_number" onChange={e => {handleChange(e)}}/>
            <label>Step Instruction</label>
            <input type="text" name="instruction_value" onChange={e => {handleChange(e)}}/>
            <button onClick={submitInstruction}>Submit Instruction</button>
            <button>Submit Recipe</button>
          </form>
          {/* <form onSubmit={e => {handleSubmit(e)}}>
            <label>Recipe Name</label>
            <input type="text" name="recipe_name" onChange={e => {handleChange(e)}}/>
            <label>Ingredients</label>
            <input type="text" name="ingredients" onChange={e => {handleChange(e)}}/>
            <button onClick={submitIngredient}>Submit Ingredients</button>
          </form>
          <form onSubmit={e => {submitInstruction(e)}}>
            <h3>Instructions</h3>
            <label>Step Number</label>
            <input type="number" name="instructions.instruction_number" onChange={e => {handleChange(e)}}/>
            <label>Step Instruction</label>
            <input type="text" name="instructions.instruction_value" onChange={e => {handleChange(e)}}/>
            <button>Submit Instruction</button>
          </form>
          <button onClick={viewRecipeButton}>View Recipe</button> */}
        </div>
      </div>
    )
  }

  const mapStateToProps = state => {
    return {
      recipe_name: state.newRecipeReducer.recipe_name,
      ingredients: state.newRecipeReducer.ingredients,
      instruction_value: state.newRecipeReducer.instructions.instruction_value,
      instruction_number: state.newRecipeReducer.instructions.instruction_number

    }
  }

  export default connect(mapStateToProps, {createRecipe, saveRecipeName, saveIngredient, saveInstructionNumber, saveInstructionValue})(BuildRecipe);