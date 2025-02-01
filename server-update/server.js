
/*require('./config/db');
require('dotenv').config();

const app= require('express')();
const port =process.env.PORT;

const UserRouter =require ('./Router/Student');



//accept data from post formdata
const bodyParser = require('express').json;
app.use(bodyParser());

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
    //print("Server Connected");
})*/


require("./config/db");
require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000; // Provide a default port if `PORT` is undefined

const UserRouter = require("./Router/Student");
const StudentRouter = require("./Router/Salvation");

// Middleware to parse JSON request bodies
app.use(express.json());

// Use the user router
app.use("/api/students", UserRouter);
// Use the user router
app.use("/pia/sal", StudentRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

