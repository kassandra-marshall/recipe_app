import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { createRecipe, saveIngredient, saveInstruction, saveRecipeName } from "../state/actionCreators";
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
            <li key={ingredient.indexOf()}>{ingredient}</li>
          </ul> 
        )
      }) : null}
      <p>Instructions: </p>
      {recipe.instructions.instruction_number ? recipe.instructions.instruction_number.map(number => {
        return (
          <ul className="instructionNumber">
            <li key={number.indexOf()}>{number}</li>
          </ul>
        )
      }) : null}
      {recipe.instructions.instruction_value ? recipe.instructions.instruction_value.map(value => {
        return (
          <ul className="instructionValue">
            <li key={value.indexOf()}>{value}</li>
          </ul>
        )
      }) : null}
    </div>
  )
}

function BuildRecipe(props) {
  const url = 'http://localhost:9000/api/recipes';
  let instruction = {
    instruction_number: instructionsN,
    instruction_value: instructionsV
  }
  const [ingredients, setIngredients] = useState([])
  const [instructionsV, setInstructionsV] = useState([])
  const [instructionsN, setInstructionsN] = useState([])
  const [data, setData] = useState({
    recipe_name: '',
    ingredients: [],
    instruction_number: [],
    instruction_value: []
  })
  
  useEffect(() => {
    props.saveIngredient(ingredients);
  }, [ingredients.length])

  useEffect(() => {
    props.saveInstruction(instruction)
  }, [instructionsN, instructionsV])

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
  
  const editRecipe = (e) => {
    e.preventDefault();

  }
  
  const submitIngredient = (e) => {
    e.preventDefault();
    setIngredients(arr => [...arr, data.ingredients])
    props.saveIngredient(ingredients);
  }

  const submitInstruction = (e) => {
    e.preventDefault();
    console.log('data', data);
    setInstructionsN(arr => [...arr, data.instruction_number])
    setInstructionsV(arr => [...arr, data.instruction_value])
    props.saveInstruction(instruction)
  }

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }

  const saveNameClick = (e) => {
    e.preventDefault();
    props.saveRecipeName(data.recipe_name)
  }

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
            <button>Edit Recipe</button>
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

  export default connect(mapStateToProps, {createRecipe, saveRecipeName, saveIngredient, saveInstruction})(BuildRecipe);