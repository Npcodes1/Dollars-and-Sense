//siteRouter to contain the front end page routes.
    //imports to siteCtrl

// importing express
const express = require("express");

//importing express.Router() to handle different requests
const router = express.Router();

//import handler Functions from the controller directory
const {admin, creditScore, financialTracker, allUsers, getUser, resources} = require("../controller/siteCtrl");

//making a route for admin page (admin.html)
router.get("/api/admin", admin);
//Does admin need a route to collect the data for the contact form? Does the login and forgot-login supposed to route to the admin page instead?


//making a route for credit score page (credit-score.html)
router.get("/api/credit-score", creditScore);

//making a route for financial tracker page (financial-tracker.html)
//CRUD operations for financial tracker? Will this edit the page or the input fields? Goal is that user can edit the financial tracker inputs but not the overall page?
router.get("/api/financial-tracker", financialTracker);

//making a route to get all users
router.get("/api/users", allUsers);

//making a route to get a single user
router.get("/api/users/:_id", getUser);

//making a route for resources page (resources.html)
router.get("/api/resources", resources);

// exporting router
module.exports = router;