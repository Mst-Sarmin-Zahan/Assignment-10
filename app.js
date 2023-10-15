//Basic import 
const express =require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./src/Routers/api");


//Security middleware import

const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const xss = require("xss");

//cookie setup import
const cookieParser = require("cookie-parser");

// Database libray import
const mongodb = require("mongodb");






// Security implement
app.use(helmet());
app.use(cors());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

app.use(mongoSanitize);
app.use(hpp);


//body-cookie setup implement
app.use(bodyParser.json());
app.use(cookieParser());



//mongodb connection implement

const mongoose = require("mongoose");

const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://sarmin:zahan@cluster0.gihn8pl.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
const db = client.db('BASATEngineeringEnterprise');
const newcollection = db.createCollection("Students");



// Defined routes here

app.use("/api", router);


// undefined routes and set 404 status code
app.use("*",(req, res, next) => {
    res.status(404).json({status:"fail", data: "404 - Not Found"})
});


module.exports = app;