// Import the express library and the PostModel from the post model file
const express = require("express");
const PostModel = require("../models/post.model");

// Create a new instance of the express router
const app = express.Router();

app.get("/", (req,res)=>{
    return res.send("post page")
})

// Handle Route to create new post with user's ID
app.post('/', async (req, res) => {
    try {
      // Get the user_id from the request body
      const { user_id } = req.body;
  
      // Create a new post using the PostModel
      const newPost = new PostModel({
        user_id,
        content: req.body.content,
        likes: 0
      });
  
      // Save the new post to the database
      await newPost.save();
  
      // Return a success response
      res.status(201).json(newPost);
    } catch (err) {
      // If there's an error, return an error response
      console.error(err);
      res.status(500).json({ message: 'Error creating post' });
    }
});

module.exports = app;