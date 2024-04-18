//import packages
const express = require("express"); //brings express into the project

//Middleware set up - morgan
const morgan = require("morgan");

//path to public folder
const path = require("node:path");

//initialize the app
const app = express(); //makes the express package usable to set up the app foundation.

//set up the port
const PORT = 3000; 

//define cors after the port- middleware that restricts which origin can make requests to the server (ie: a bouncer);
const cors = require("cors");

//use morgan - middleware that gives information about the request
app.use(morgan("dev"));

//defining routing variable to data
const routes = require("./routes/siteRouter");

//J-SON Derulo- middleware that unpacks/reads json data sent from client and helps server understand/work with the data
app.use(express.json());

//encode forms- middleware that scrambles form info to protect it from being shown. Helps server decode it.
app.use(express.urlencoded({ extended: true }));

//using path to let app know public directory is available to be used
app.use(express.static(path.join(__dirname, "public")));

//use cors
app.use(cors());

//GET Requests
//making a route for home page(index.html)
app.get("/api/", (req, res, next) => {
    res.status(200).json({ success: { message: "This is the homepage" }, statusCode: 200 });
});

//use to route to siteRouter.js
app.use(routes);

//Server
app.listen(PORT, () => {
    //to listen for requests
    console.log(`The server is listening at port ${PORT}`);
    //to get the localhost link
    console.log(`http://localhost:${PORT}`);
});
