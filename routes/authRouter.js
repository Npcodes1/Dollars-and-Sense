//authRouter to contain the authorization-related routes. The routes that go to admin page.
    //imports to authCtrl

// importing express
const express = require("express");

//importing express.Router() to handle different requests
const router = express.Router();

//import handler Functions from the controller directory
const {login, localLogin, loginFailed, logOutRequest, signUpRequest, getAllUsers, getUser, forgotLogin, getAllMessages, getMessage} = require("../controller/authCtrl");

//Profile (for signup/login form)
//making a route to read Profile page (login.html)
router.get("/api/auth/login", login);

// //Detect if user logged in
router.get("/api/auth/login/local", localLogin);

// //Detect for failed login attempts
router.get("/api/auth/login/failed", loginFailed);

// //Detect for logging out
// router.get("/api/auth/logout", logOutRequest);

// //Detect for signing up
// router.get("/api/auth/signup", signUpRequest);

//User data after signing up
//making a route to get all users
router.get("/api/admin/users", getAllUsers);

//making a route to get a single user
router.get("/api/admin/users/:_id", getUser);

//Forgot Login Form
//making a route to read forgot login page (forgot-login.html)
router.get("/api/auth/forgot-login", forgotLogin);

//Get all messages
router.get("/api/admin/messages", getAllMessages);

//Get single message
router.get("/api/admin/message/:_id", getMessage);


//Get in Touch Form
//making a routes to find all form Data 

//making a route to search for a single form Data

//making a route to create form data

//making a route to update form data

//making a route to delete form data


// exporting router
module.exports = router;