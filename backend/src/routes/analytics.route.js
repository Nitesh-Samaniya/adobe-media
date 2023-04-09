// Import the express library and the PostModel from the post model file
const express = require("express");

const UserModel = require("../models/user.model");
const PostModel = require("../models/post.model");

const app = express.Router();


// Route handler for GET requests to count total number of users
app.get("/users", async (req, res) => {
    try {
        // Count the number of users in the database
        const count = await UserModel.find();
        // Return a response with the total number of users
        return res.status(200).send(count);
    } catch (e) {
        // If there's an error while processing the request, return a 500 status code with the error message
        return res.status(500).send(e.message);
    }
});

//Handle Route GET to count total number of posts
app.get('/posts', async (req, res) => {
    try {
      // Get the total number of posts 
      const totalPosts = await PostModel.find();
  
      // Return a success response with the total number of posts
      return res.status(200).send(totalPosts);;
    } catch (err) {
      // If there's an error, return an error response
      console.error(err);
      res.status(500).json({ message: 'Error retrieving total number of posts' });
    }
  });


  //
  app.get('/posts/top-liked', async (req, res) => {
    try {
      // Get the top 5 most liked posts using the PostModel and sort in descending order
      const topLikedPosts = await PostModel.find().sort({ likes: -1 }).limit(5);
  
      // Return a success response with the top 5 most liked posts
      res.status(200).json({ topLikedPosts });
    } catch (err) {
      // If there's an error, return an error response
      console.error(err);
      res.status(500).json({ message: 'Error retrieving top 5 most liked posts' });
    }
  });

  module.exports = app;