const express=require('express');
const app=express();
const mongoose=require('mongoose');
require('dotenv').config();

const port=process.env.PORT ||8000;

//ODM - mongoose
//const mongoose=require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Deepak:123@cluster0.nodx9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(
    uri,{
    useNewUrlParser: true,useUnifiedTopology:true,useCreateIndex:true}).then(()=>{
        console.log("db connected successful")
    }).catch(()=>{
        console.log("Error in DB connection");
    });

//Middlewares
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require("cors");

const courseRoutes=require("./routes/register");

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use("/api",courseRoutes);





app.listen(port,'192.168.43.4',()=>{
    console.log("Backend is running");
})