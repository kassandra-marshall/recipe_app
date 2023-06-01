import React from "react";

function BuildRecipe() {
    return (
      <div>
        <header>
          <h2>Recipe Builder</h2>
        </header>
        <div>
          <form>
            <label>Ingredient</label>
            <input type="text"/>
            <button>Submit Ingredient</button>
            <label>Instruction</label>
            <input type="text"/>
            <button>Submit Instruction</button>
            <button>View Recipe</button>
          </form>
        </div>
      </div>
    )
  }

  export default BuildRecipe;