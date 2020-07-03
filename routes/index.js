const express = require('express');
const router  = express.Router();
const Recipe= require('../models/Recipe.js');

/* GET home page */
router.get('/', (req, res, next) => {
  
  res.render('index');
});

router.get('/recipes', (req, res, next) => {
  Recipe.find().then(function(recipess){
    console.log('les recettes de la DB sont :', recipes);
    res.render('recipes', {
        recipes:recipes
    });

  }).catch(err=>console.error(err))
 
});

router.get('/recipes/:recipeid', function(req, res, next){
  Recipe.find({_id:req.params.recipeid}).then(function(recipe) {
    
    res.render('RecipeDetails', {
      recipe:recipe[0]
      
    });
  }).catch(err=>console.error(err))
  
});

module.exports = router;