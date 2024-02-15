const express = require('express');
const mongoose = require('mongoose');

const app = express();

//connecting mongoose to mongoDB
mongoose
.connect('mongodb://127.0.0.1/test')
.then(()=>{
    console.log('connected to MongoDB')
    app.listen(3000,()=>{
        console.log('Node API is running on port 3000')
    });
    
}).catch((error)=>{
    console.log('Error Failed to connect to MongoDB')
});

//schema
const recipeModel = mongoose.Schema(
    {
        title:{
            type:String,
            required:[true,'Please Enter a Title']
        },
        ingredients:{
            type:Array,
            required:[true,'Please Enter Ingridients']
        },
        instructions:{
            type:String,
            required:[true,'Please Enter Instructions']
        },
        tags:{
            type:Array,
            required:[true,'Please Enter a Categorie']
        },
    }
)
const Recipe = mongoose.model('Recipe',recipeModel)
module.exports= Recipe;

//Middleware
app.use(express.json());

//Create new recipe
app.post('/recipes', async (req, res) => {
    try{
        const recipe = new  Recipe(req.body);
        await recipe.save();
        res.status(201).json(recipe);
    } catch (err){
        res.status(400).json({error: err.message});
    }
});

//Read all recipes
app.get ('/recipes', async (req, res) => {
    try{
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (err){
        res.status(500).json({error: err.message});
    }
});

//Read Recipe by ID
app.get('/recipes/:id', async (req, res) => {
    try{
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe){
           return res.status(404).json({error: 'Recipe Not Found'});
        }
        res.json(recipe);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

//Updated Recipe by ID ("EDIT")
app.put('/recipes/:id', async (req, res) =>{
    try {
        const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true});
        if (!recipe){
            return res.status(404).json({error: 'Recipe Not Found'});
        }
        res.json(recipe);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

//Delete Recipe by ID
app.delete('/recipes/:id', async (req, res) => {
    try{
        const recipe = await Recipe.findByIdAndDelete(req.params.id);
        if(!recipe){
            return res.status(404).json({ error: 'Recipe Not Found'});
        }
        res.json({message: 'Recipe deleted successfully'});
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message});
    }
});

//Error Handling
app.use((err, req, res, next) => {
    console.error(err.stack);

    // Check if it's a specific error type (e.g., TypeError)
    if (err instanceof TypeError) {
        res.status(400).json({ error: 'Something is wrong with the request data' });
    } else {
        // For other types of errors, respond with a generic message
        res.status(500).json({ error: 'Something went wrong!' });
    }
});