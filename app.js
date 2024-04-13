//import packages
const express = require("express"); //brings express into the project
const app = express(); //makes the express package usable to set up the app foundation.

//set up the port
const PORT = 3000; 


//Middleware set up
const morgan = require("morgan");

//use morgan
app.use(morgan("dev"));


const cors = require("cors");
app.use(cors());

//Make GET Requests
//making a route for home page(index.html)
app.get("/", (req, res, next) => {
    res.status(200).json({success: {message: "This is the homepage"}});
});

//making a route for admin page (admin.html)
app.get("/admin", (req, res, next) => {
    res.status(200).json({success: {message: "This is the admin page"}});
});

//making a route for credit score page (credit-score.html)
app.get("/credit-score", (req, res, next) => {
    res.status(200).json({success: {message: "This is the credit score page"}});
});

//making a route for financial tracker page (financial-tracker.html)
app.get("/financial-tracker", (req, res, next) => {;
    res.status(200).json({success: {message: "This is the financial tracker page"}});
});

//making a route for forgot login page (forgot-login.html)
app.get("/forgot-login", (req, res, next) => { 
    res.status(200).json({success: {message: "This is the forgot login page"}});
});

//making a route for login page (login.html)
app.get("/login", (req, res, next) => {
    res.status(200).json({success: {message: "This is the login"}});
});

//making a route for resources page (resources.html)
app.get("/resources", (req, res, next) => {
    res.status(200).json({success: {message: "This is the resources page"}});
});

app.listen(PORT, () => {
    console.log(`The server is listening at port ${PORT}`) //to listen for requests
    console.log(`http://localhost:${PORT}`); //to get the localhost link
});
