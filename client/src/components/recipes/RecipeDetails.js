// components/projects/ProjectDetails.js

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import EditRecipe from './EditRecipe.js'


class RecipeDetails extends Component {
 
     state = {};
  

  // 
  componentDidMount(){
      this.getSingleRecipe();
  }

  // 
  getSingleRecipe = () => {
      const { params } = this.props.match;
      axios.get(`http://localhost:5000/api/recipes/${params.id}`)
      .then( responseFromApi =>{
          const theRecipe = responseFromApi.data;
          this.setState(theRecipe);
      })
      .catch((err)=>{
          console.log(err)
      })
  }

  // 👨‍🏫
  renderEditForm = () => {
    if(!this.state.title){
      this.getSingleRecipe();
    } else {
    // {...props} => so we can have 'this.props.history' in Edit.js

      return <EditRecipe theRecipe={this.state} getTheRecipe={this.getSingleRecipe} {...this.props} />
        
    }
  }

  // DELETE Recipe:
  deleteRecipe = () => {
    const { params } = this.props.match;
    axios.delete(`http://localhost:5000/api/recipes/${params.id}`)
    .then( () =>{
        this.props.history.push('/recipes'); // !!!         
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  renderAddRecipeForm = () => {
    if(!this.state.title){
      this.getSingleRecipe();
    } else {     
              // pass the project and method getSingleProject() as a props down to AddTask component
      return <AddRecipe theRecipe={this.state} getTheRecipe={this.getSingleRecipe} />
    }
  }

  render(){
    return(
      <div> 
        {/* <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>

        {/* show the task heading only if there are tasks */}
        { this.state.tasks && this.state.tasks.length > 0 && <h3>Tasks </h3> }
        {/* map through the array of tasks and... */}
        { this.state.tasks && this.state.tasks.map((task, index) => {
            return(
                <div key={ index }>
                {/* ... make each task's title a link that goes to the task details page */}
                    <Link to={`/projects/${this.state._id}/tasks/${task._id}`}> 
                        { task.title }
                    </Link>
                </div>
            )
            
        }) }

        <div>{this.renderEditForm()} </div>

        <button onClick={() => this.deleteProject()}>Delete project</button>

        <div>{this.renderAddTaskForm()} </div>

      
      </div>
    )
  }
}

export default RecipeDetails;