//Router for handling user-related requests.
require("dotenv").config();

const express = require("express");
const argon2 = require("argon2");

const UserModel = require("../models/user.model");

const app = express.Router();

// Route handler for GET requests to get all users
app.get("/", async (req,res)=> {
     // Retrieve all users from the database
    const users = await UserModel.find();
    // Return a response with the retrieved users
    return res.send(users)
})


// Route handler for POST requests to Create a new user.
app.post("/", async(req,res)=> {
    // Extract name, email, password, and bio from the request body
    let {name, email, password, bio } = req.body;
    
    // Hash the password using the argon2 library
    const hash = await argon2.hash(password);

    // Check if a user with the same email already exists in the database
    let user = await UserModel.findOne({email});

    try{
        if(user){
            // If a user with the same email already exists, return a 409 status code with an error message
            return res.status(409).send("This email is already in use try with other email.")
        }else{
            // If no user exists with the same email, create a new user with the provided information and save it to the database
            let newUser = new UserModel({name, email, password: hash, bio });
            await newUser.save();
            // Return a 201 status code with the newly created user
            return res.status(201).send(newUser);
        }
    }catch(e){
        // If there's an error while processing the request, return a 500 status code with the error message
        return res.status(500).send(e.message);
    }

})


// Route handler for GET requests to the /users/:id endpoint
app.get("/:id", async (req, res) => {
    try {
        // Find the user in the database using the provided id
        const user = await UserModel.findById(req.params.id);
        // If no user is found, return a 404 status code with an error message
        if (!user) {
            return res.status(404).send("User not found");
        }
        // If a user is found, return a response with the user information
        return res.send(user);
    } catch (e) {
        // If there's an error while processing the request, return a 500 status code with the error message
        return res.status(500).send(e.message);
    }
});


module.exports = app;