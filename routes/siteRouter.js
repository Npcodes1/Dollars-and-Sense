//siteRouter to contain the front end page routes.
    //imports to siteCtrl

// importing express
const express = require("express");

//importing express.Router() to handle different requests
const router = express.Router();

//import handler Functions from the controller directory
const {admin, allUsers} = require("../controller/siteCtrl");

//making a route for admin page (admin.html)
router.get("/api/admin", admin);

//making a route for credit score page (credit-score.html)
router.get("/api/credit-score", );

//making a route for financial tracker page (financial-tracker.html)
router.get("/api/financial-tracker", );

//making a route for forgot login page (forgot-login.html)
router.get("/api/auth/forgot-login", );
 
//making a route for login page (login.html)
router.get("/api/auth/login", );

//making a route to get all users
router.get("/api/users", allUsers);

//making a route to get a single user
router.get("/api/users/:id", );

//making a route for resources page (resources.html)
router.get("/api/resources", );

// exporting router
module.exports = router;