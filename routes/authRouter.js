//authRouter to contain the authorization-related routes.
    //imports to authCtrl

// importing express
const express = require("express");

//importing express.Router() to handle different requests
const router = express.Router();

//import handler Functions from the controller directory
const {forgotLogin, login} = require("../controller/authCtrl");

//making a route for forgot login page (forgot-login.html)
router.get("/api/auth/forgot-login", forgotLogin);

//making a route for login page (login.html)
router.get("/api/auth/login", login);


// exporting router
module.exports = router;