import React, {Component} from 'react';

//afficher une recette
class RecipeBox extends Component {
  

  render(){
    return(
      <div className="recipeBox">
        <h2> {this.props.title}</h2>
        <p>{this.props.dishType}</p>
      </div>
    )
  }
}

export default RecipeBox;