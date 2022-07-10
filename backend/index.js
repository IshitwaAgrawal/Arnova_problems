require("dotenv").config();

const app = require('express')();
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONGO_URL);

mongoose.connection.once("open",()=>{
    console.log("Connected to Mongo DB!");
});

app.listen(PORT,()=>console.log(`Server is up on -> ${PORT}`))