const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const RecipeSchema = new Schema({
    title: String,
    description: String,
    author: String,
    rating: Number
  }, {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  });
  
const Recipe = mongoose.model("Recipe", RecipeSchema);
module.exports = Recipe;