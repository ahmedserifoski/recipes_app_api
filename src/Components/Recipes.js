import React from 'react'
import { Link } from "react-router-dom"

const Recipes = (props) => {
    return (
        <div className="container">
            <div className="row">
                {props.recipes.map(oneRecipe => {
                    const recipe = oneRecipe.recipe
                    return (
                        <div key={recipe.label} className="col-md-4" style={{ marginBottom: "2em"}}>
                            <div className="recipes__box">
                                <img 
                                    className="recipe__box-img"
                                    src={recipe.image}
                                    alt={recipe.label}
                                />
                                <div className="recipe__text">
                                <h5 className="recipes__title">{recipe.label.length < 15 ? `${recipe.label}` : `${recipe.label.substring(0, 20)}...` }</h5>
                                <button className="recipe_buttons">
                                    <Link to={{
                                        pathname:`/recipe/${recipe.totalWeight}`,
                                        state: {recipe: recipe.label}
                                        }}>View Recipe</Link>
                                </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}

export default Recipes
