import React from 'react';
import './App.css';
import RecipesList from './components/recipes/RecipesList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Bienvenue sur Recettes de famille</h1>
       <RecipesList />
      </header>
    </div>
  );
}

export default App;
