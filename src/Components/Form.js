import React from 'react'

const Form = ( {getRecipe }) => {
    return (
        <div>
            <form onSubmit={getRecipe} style={{ marginBottom: "2rem" }}>
                <input
                    type="text"
                    name="recipeName"
                    placeholder="Recipe"
                    className="form__input"
                 />
                <button className="form__button">Search</button>
            </form>
        </div>
    )
}

export default Form