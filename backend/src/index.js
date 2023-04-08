// Load environment variables from a .env file
require("dotenv").config();

// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");

// Import database connection function
const connect = require("./config/db");

// Set the port for the server to listen on
const PORT = process.env.PORT || 8080;

//import user and post routes
const userRouter = require("./routes/user.route");
const postRouter = require("./routes/post.route");
const analyticsRouter = require("./routes/analytics.route");

// Create an instance of the express app
const app = express();

// Middleware to parse incoming request bodies as JSON
app.use(express.json());

// Enable Cross-Origin Resource Sharing
app.use(cors());

// Middleware to parse incoming request bodies
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

// Disable strict mode for MongoDB queries with undefined fields
mongoose.set("strictQuery", false);

// Handle requests to the /users endpoint with the userRouter
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/analytics", analyticsRouter);

// Handle requests to the root endpoint
app.get("/", (req,res)=> {
    res.send("Adobe Media");
})

// Start the server and connect to the database
app.listen(PORT, async()=>{
    connect();
    console.log(`listening at port http://localhost:${PORT}`);
})