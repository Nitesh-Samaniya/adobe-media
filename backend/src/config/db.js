const mongoose = require("mongoose");

const connect = async ()=>{
    return await mongoose.connect(process.env.DB_URL);
}

module.exports = connect;