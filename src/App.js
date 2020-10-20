import React, {Component} from 'react';

import './App.css';
import Form from "./Components/Form"
import Recipes from "./Components/Recipes"

    const API_ID = "22d57a35"
    const API_KEY = "1521a8a638ba395189e881d0162d51d6"
    

class App extends Component {

  state = {
    recipes: [],
    isLoading: true
  }

  getRecipe = async(event) => {
    event.preventDefault()
    this.setState({isLoading: true})
    const recipeName = event.target.elements.recipeName.value
    const example_link = `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?app_id=${API_ID}&app_key=${API_KEY}&q=${recipeName}`
    const res = await fetch(example_link)
    const data = await res.json()
    this.setState( {recipes: data.hits} )
    if(data.hits === this.state.recipes) {
        this.setState({isLoading: false})
    }
    // console.log(this.state.recipes)
    
  }

  getRandomRecipe = async() => {
    
    const example_link = `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?app_id=${API_ID}&app_key=${API_KEY}&q=burger
    `
    const res = await fetch(example_link)
    const data = await res.json()
    this.setState( {isLoading: false} )
    this.setState( {recipes: data.hits} )
    
  }

  componentDidMount = () => {
    this.getRandomRecipe()
    
    
  }

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes)
    localStorage.setItem("recipes", recipes)
  }

  render() {
    return(
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">recipe search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        <Recipes recipes={this.state.recipes} isLoading={this.state.isLoading}/>
      </div>
    )
  }
}

export default App
