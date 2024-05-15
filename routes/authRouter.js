//authRouter to contain the authorization-related routes. The routes that go to admin page.
//imports to authCtrl

// importing express
const express = require("express");

//import handler Functions from the controller directory
const {
  signUpRequest,
  getAllUsers,
  getUser,
  forgotLogin,
  getAllMessages,
  getMessage,
  admin,
} = require("../controller/authCtrl");

//importing express.Router() to handle different requests
const router = express.Router();

//Signing up
router.post("/api/auth/signup", signUpRequest); //doesn't work

//Forgot Login Form
//making a GET route to read forgot login page (forgot-login.html)
router.get("/api/auth/forgot-login", forgotLogin);

//User data after signing up
//making a route to get all users
router.get("/api/admin/users", getAllUsers);

//making a GET route to get a single user
router.get("/api/admin/users/:_id", getUser);

//Get all messages
router.get("/api/admin/messages", getAllMessages);

//Get single message
router.get("/api/admin/messages/:_id", getMessage);

//Get in Touch Form

//making a route to search for a single form Data

//making a route to create form data

//making a route to update form data

//making a route to delete form data

//Admin
//making a GET route to read admin page (admin.html) - capability to read the admin page
router.get("/api/admin", admin);

// exporting router
module.exports = router;
