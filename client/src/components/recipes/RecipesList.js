import React, {Component} from 'react';
import axios from 'axios';
import RecipeBox from './RecipeBox.js';
import AddRecipe from './AddRecipe.js';

//lister toutes les recettes
class RecipesList extends Component {
    state = { listOfRecipes: [] };
   
    getAllRecipes = () =>{
        axios.get(`http://localhost:5000/api/recipes`)
        .then(responseFromApi => {
          this.setState({
            listOfRecipes: responseFromApi.data
          })
        })
      }
      
    componentDidMount() {
    this.getAllRecipes();
    }

  render(){
    return(
      <div className="recipesList">
        <AddRecipe getAllRecipes={this.getAllRecipes}/>
           {this.state.listOfRecipes.map(recipe => (
            <div className="recipe" key={recipe._id}><RecipeBox title={recipe.title} dishType={recipe.dishType}/></div>))}
     
      </div>
    )
  }
}

export default RecipesList;