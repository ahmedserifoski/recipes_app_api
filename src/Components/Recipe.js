// import { render } from '@testing-library/react'
import React from 'react'
import {Link} from "react-router-dom"

const API_ID = "22d57a35"
const API_KEY = "1521a8a638ba395189e881d0162d51d6"

class Recipe extends React.Component{

    state = {
        activeRecipe: []
    }

    componentDidMount = async () => {
        const label = this.props.location.state.recipe
        const example_link = `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?app_id=${API_ID}&app_key=${API_KEY}&q=${label}`
        const response = await fetch(example_link)
        const recipeData = await response.json() 
        this.setState({ activeRecipe: recipeData.hits[0].recipe})
        console.log(this.state.activeRecipe)
    }

    render() {
        const recipe = this.state.activeRecipe
        return(
            <div className="continer">
                {
                    recipe.length !== 0 &&
                    <div className="active-recipe">
                        <img 
                            className="active-recipe__img"
                            src={recipe.image}
                            alt=""
                        />
                        <h3 className="active-recipe__title">{recipe.label}</h3>
                        <h4 className="active-recipe__publisher">
                            <span>{recipe.healthLabels.map(healthLabel => {
                                return `${healthLabel}, `
                            })}</span>
                        </h4>
                        <p>Website: <span><a href={recipe.url}>Visit website</a></span></p>
                        <button className="active-recipe__button">
                            <Link to="/">Go Home</Link>
                        </button>
                    </div>
                }
            </div>
        )
    }
}

export default Recipe

