import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class HomePage extends Component {
  
  render(){
    return(
      <div className="Homepage">
       <h1>Bienvenue sur Recettes de famille</h1>
       <Link to="/recipes">Voir toutes les recettes</Link>
      </div>
    )
  }
}

export default HomePage;