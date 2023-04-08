require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");

const connect = require("./config/db");
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

mongoose.set("strictQuery", false);


app.get("/", (req,res)=> {
    res.send("Adobe Media");
})

app.listen(PORT, async()=>{
    connect();
    console.log(`listening at port http://localhost:${PORT}`);
})