import React from 'react'
import './Recipe.css'

function Recipe({calories, title, img, ingredients}) {
    return (
        <div className = "recipe">
            <h1 className ="recipe_title"> {title} </h1>
            <ul className="recipe_ingredients">
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p className = "recipe_calories">Calories: {Math.floor(calories)}</p>
            <img className = "recipe_img" src ={img} alt="" />
        </div>
    )
}

export default Recipe
