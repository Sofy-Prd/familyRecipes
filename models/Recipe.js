const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: {type: String, required: true, unique: true},
  ingredients: {type: Array},
  dishType: {type: String, enum: ['Apéritif', 'Entrée', 'Plat', 'Dessert', 'Autre']},
  image: {type: String},
  preparation: {type: Array},
  cookingTime:{type:Number},
  duration: {type: Number},
  temperature: {type:Number},
  creator: {type: String},
  created: {type: Date, default: new Date()}
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
