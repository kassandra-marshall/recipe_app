import React from "react";
import { connect } from "react-redux";
import { createRecipe } from "../state/actionCreators";


function BuildRecipe() {
  const handleSubmit = (e) => {
    e.preventDefault();

  }

  const submitInstruction = (e) => {
    e.preventDefault();

  }
    return (
      <div>
        <header>
          <h2>Recipe Builder</h2>
        </header>
        <div>
          <form onSubmit={handleSubmit}>
            <label>Recipe Name</label>
            <input type="text" />
            <label>Ingredients</label>
            <input type="text"/>
            <button>Submit Ingredients</button>
            <form onSubmit={submitInstruction}>
              <label>Instructions</label>
              <label>Step Number</label>
              <input type="number"/>
              <label>Step Instruction</label>
              <input type="text"/>
              <button>Submit Instruction</button>
            </form>
            <button>View Recipe</button>
          </form>
        </div>
      </div>
    )
  }

  const mapStateToProps = state => {
    return {
      recipe_name: state.createNewRecipe.recipe_name,
      ingredients: state.createNewRecipe.ingredients,
      instructions: state.createNewRecipe.instructions

    }
  }

  export default connect(mapStateToProps, {createRecipe})(BuildRecipe);