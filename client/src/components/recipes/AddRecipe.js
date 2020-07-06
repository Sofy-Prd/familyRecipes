import React, {Component} from 'react';
import axios from 'axios';

//ajouter une recette
class AddRecipe extends Component {
  state = { title: '',
            // ingredients: '',
            // dishType: '',
            // image:'' ,
            // preparation:'' ,
            cookingTime:'',
            duration:'' ,
            // temperature:'' ,
            // creator: ''
          };
  
   
  handleFormSubmit = (event) => {
    alert('La recette suivante a été ajoutée : ' + this.state.title);
    console.log('this.state', this.state);
    event.preventDefault();
    const title = this.state.title;
    // const ingredients= this.state.ingredients;
    const dishType= this.state.dishType;
    // const image=this.state.image;
    // const preparation=this.state.preparation;
    const cookingTime=this.state.cookingTime;
    const duration=this.state.duration;
    // const temperature=this.state.temperature;
    // const creator= this.state.creator;

    axios.post("http://localhost:5000/api/recipes", { title,dishType,cookingTime,duration })
    .then( () => {
        this.props.getAllRecipes();
        this.setState({title: "", dishType: '',cookingTime:'', duration:'' });
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
      const {name, value} = event.target;
      this.setState({[name]: value});
  }

  render(){
    return(
      <div className="addRecipe">
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input type="text" name="title" value={this.state.title} onChange={ e => this.handleChange(e)}/>
          {/* <label>Ingredients:</label>
          <input type="text" name="ingredients" value={this.state.ingredients} onChange={ e => this.handleChange(e)}/> */}
          <label>Type de repas:</label>
          <select name="dishType" value={this.state.dishType} onChange={e =>this.handleChange(e)}>
            <option value="Apéritif" >Apéritif</option>
            <option value="Entrée" >Entrée</option>
            <option value="Plat" >Plat</option>
            <option value="Dessert"  >Dessert</option>
            <option value="Autre" >Autre</option>
          </select>
          {/* <label>Préparation:</label>
          <input type="text" name="preparation" value={this.state.preparation} onChange={ e => this.handleChange(e)}/> */}
          <label>Temps de cuisson:</label>
          <input type="text" name="cookingTime" value={this.state.cookingTime} onChange={ e => this.handleChange(e)}/>
          <label>Temps complet de le recette:</label>
          <input type="text" name="duration" value={this.state.duration} onChange={ e => this.handleChange(e)}/>
          {/* <label>temperature de cuisson</label>
          <input type="text" name="temperature" value={this.state.temperature} onChange={ e => this.handleChange(e)}/>
          <label>Créateur:</label>
          <input type="text" name="creator" value={this.state.creator} onChange={ e => this.handleChange(e)}/> */}
          <input type="submit" value="Ajouter la recette" />
        </form>
      </div>
    )
  }
}

export default AddRecipe;