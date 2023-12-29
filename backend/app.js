const express = require("express");
const dotenv = require('dotenv');

const app = express();
const errorMiddleware = require("./middlewares/error");
const cookieParser = require("cookie-parser");
const path = require("path")
const options = {
    allowedHosts: ['localhost'], // Ensure it is a non-empty string like 'localhost'
    // other server options...
  }; 

  dotenv.config({ path: path.join(__dirname, "config/config.env") });


app.use(express.json());
app.use(cookieParser());
app.use('/uploads',express.static(path.join(__dirname,'uploads')))//to make uploads folder static to use avaatar getting from profile url

const products =require("./routes/product")
const auth =require("./routes/auth")
const order = require('./routes/order')
const payment = require('./routes/payment')

 
app.use('/api/v1/',products)
app.use('/api/v1/',auth)
app.use('/api/v1/',order)
app.use('/api/v1/',payment)
app.use(errorMiddleware)

module.exports = app;