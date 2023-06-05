import React, {useState, useEffect} from "react";

import axios from "axios";
import { connect } from "react-redux";
import { getRecipe } from "../state/actionCreators/index"

function ViewRecipe(props) { 
    const { recipe_id } = props
    console.log('recipe_id', recipe_id)
    useEffect(() => {
        async function getRequest () {
            await axios.get(`http://localhost:9000/api/recipes/${recipe_id}`)
            .then(res => {
                console.log(res.data)
                const recipeData = res.data;
                props.getRecipe(recipeData)
            })
            .catch(error => console.error(error));
        }
        getRequest()
    }, []) //eslint-disable-line
    console.log(props.recipe_name)
    return(
        <div>
            <h1>{props.recipe_name}</h1>
            <ul>Ingredients:
                <li>{props.ingredients}</li>
            </ul>
            <ul>Instructions:
                {props.instructions.map(value => {
                    console.log(value)
                    return (
                        <div key={props.instruction_number}>
                            <li>Step: {value.instruction_number} - {value.instruction_value}</li>
                        </div>
                        
                    )
                    })}

            </ul>

        </div>
    )
}

const mapStateToProps = state => {
    return ({
        recipe_id: state.recipe_id,
        recipe_name: state.recipe_name,
        ingredients: state.ingredients,
        instructions: state.instructions,
    })
}

export default connect(mapStateToProps, {getRecipe})(ViewRecipe);