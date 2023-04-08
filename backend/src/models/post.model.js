// Import the Mongoose library's `Schema` and `model` methods
const { Schema, model } = require("mongoose");

// Define the schema for a post
const PostSchema = new Schema({
    // User ID associated with the post
    user_id: {type: String, required: true},

    // Content of the post
    content: {
        type: String, 
        required: true,
        max: 300
    },

    // Number of likes on the post
    likes: {
            type: Number, 
            default: 0
        },
}, {
    // Options for the schema
    timestamps: true,   // Automatically add createdAt and updatedAt fields
    versionKey: false,  // Do not include a version key in documents
})

// Create a Mongoose model for the post schema
const PostModel = model("post", PostSchema);

// Export the model to be used elsewhere in the application
module.exports = PostModel;