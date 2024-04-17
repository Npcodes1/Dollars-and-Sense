//siteRouter to contain the front end page routes.
    //imports to siteCtrl

// importing express
const express = require("express");

//importing express.Router() to handle different requests
const router = express.Router();

//import handler Functions from the controller directory
const {homePage, admin, creditScore, financialTracker, forgotLogin, login, allUsers, resources} = require("../controller/siteCtrl");

//GET Requests
//making a route for home page(index.html)
router.get("/api/", homePage);

//making a route for admin page (admin.html)
router.get("/api/admin", admin);
//Does admin need a route to collect the data for the contact form? Does the login and forgot-login supposed to route to the admin page instead?

//making a route for credit score page (credit-score.html)
router.get("/api/credit-score", creditScore);

//making a route for financial tracker page (financial-tracker.html)
router.get("/api/financial-tracker", financialTracker);
//CRUD operations for financial tracker? Will this edit the page or the input fields? Goal is that user can edit the financial tracker inputs but not the overall page?

//making a route for forgot login page (forgot-login.html)
router.get("/api/auth/forgot-login", forgotLogin);
 
//making a route for login page (login.html)
router.get("/api/auth/login", login);

//making a route to get all users
router.get("/api/users", allUsers);

//making a route to get a single user
router.get("/api/users/:id", );

//making a route for resources page (resources.html)
router.get("/api/resources", resources);

// exporting router
module.exports = router;