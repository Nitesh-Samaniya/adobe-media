const mongoose = require("mongoose"); //Connect to the MongoDB database using Mongoose.

const connect = async ()=>{
    return await mongoose.connect(process.env.DB_URL);
}

module.exports = connect;