const express = require('express');
const router  = express.Router();
const Recipe= require('../models/Recipe.js');

// LIST
router.get('/recipes', (req, res, next) => {
    Recipe.find().sort({createdAt: -1})
        .then(recipes => res.json(recipes))
        .catch(err => res.status(500).json(err))
});

// CREATE
router.post('/recipes', (req, res, next)=>{
    Recipe.create({
        title: req.body.title,
        ingredients: req.body.ingredients,
        dishType: req.body.dishType,
        image: req.body.image,
        preparation: req.body.preparation,
        cookingTime:req.body.cookingTime,
        duration: req.body.duration,
        temperature: req.body.temperature,
        creator: req.body.creator,
        created: req.body.created 
    })
        .then(recipe=> res.status(201).json(recipe))
        .catch(err => res.status(500).json(err))
})
// SHOW
router.get('/recipes/:id', (req, res, next)=>{
  
    Recipe.findById(req.params.id)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => {
        res.json(err);
      })
  })

// UPDATE
router.put('/recipes/:id', (req, res, next)=>{
    Recipe.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(recipe => res.json(recipe))
        .catch(err => res.status(500).json(err))
})

// DESTROY
router.delete('/recipes/:id', (req, res, next)=>{
    Recipe.findByIdAndRemove(req.params.id)
        .then(recipe => res.status(204).send())
        .catch(err => res.status(500).json(err))
})

module.exports = router;