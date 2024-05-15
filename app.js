require("dotenv").config();
require("./config/connection");
require("./config/authStrategy");

//Set Up
const express = require("express");
const morgan = require("morgan");
const path = require("node:path");
const cors = require("cors");
const helmet = require("helmet");
const session = require("express-session");
const passport = require("passport");
const app = express();
const PORT = process.env.PORT || 3000;

//Declare routing variables
const authRoutes = require("./routes/authRouter");
const trackerRoutes = require("./routes/trackerRouter");
const creditRoutes = require("./routes/creditRouter");
const resourceRoutes = require("./routes/resourceRouter");
const contactRoutes = require("./routes/contactRouter");
const profileRoutes = require("./routes/profileRouter");

//Use Middleware
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(cors());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Use session and passport
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

//making a route for home page(index.html)
app.get("/api/", (req, res, next) => {
  res
    .status(200)
    .json({ success: { message: "This is the homepage" }, statusCode: 200 });
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
