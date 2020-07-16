import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/recipes/Homepage';
import RecipesList from './components/recipes/RecipesList';
import AddRecipe from './components/recipes/AddRecipe';
// import RecipeDetails from './components/recipes/RecipeDetails';


function App() {
  return (
    <div className="App">
     
      <Switch>
          {/* <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser}/>}/> */}
          <Route exact path='/' component={HomePage} />
          <Route exact path="/recipes" component={RecipesList}/>
          <Route exact path="/addrecipe" component={AddRecipe}/>
          {/* <Route exact path="/recipes/:id" component={RecipeDetails} /> */}
       </Switch>
    </div>
  );
}

export default App;
