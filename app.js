//ensure all parts of the app has access to the process.env object
require("dotenv").config();

//connect to MongoDb
require("./config/connection");

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

//declaring routing variables
const authRoutes = require("./routes/authRouter");
const trackerRoutes = require("./routes/trackerRouter");
const creditRoutes = require("./routes/creditRouter");
const resourceRoutes = require("./routes/resourceRouter");
const contactRoutes = require("./routes/contactRouter");
const profileRoutes = require("./routes/profileRouter");


//J-SON Derulo- middleware that unpacks/reads json data sent from client and helps server understand/work with the data
app.use(express.json());

//encode forms- middleware that scrambles form info to protect it from being shown. Helps server decode it.
app.use(express.urlencoded({ extended: true }));

//using path to let app know public directory is available to be used
app.use(express.static(path.join(__dirname, "public")));

//use cors
app.use(cors());

//making a route for home page(index.html)
app.get("/api/", (req, res, next) => {
    res.status(200).json({ success: { message: "This is the homepage" }, statusCode: 200 });
});

//use the routes in the specified router files
app.use(authRoutes);
app.use(trackerRoutes);
app.use(creditRoutes);
app.use(resourceRoutes);
app.use(contactRoutes);
app.use(profileRoutes);

//Server
app.listen(PORT, () => {
    //to listen for requests
    console.log(`The server is listening at port ${PORT}`);
    //to get the localhost link
    console.log(`http://localhost:${PORT}`);
});
