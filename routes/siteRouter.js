//siteRouter to contain the front end page routes.
    //imports to siteCtrl

// importing express
const express = require("express");

//importing express.Router() to handle different requests
const router = express.Router();

//import handler Functions from the controller directory
const {admin, creditScore, financialTracker, allUsers, getUser, resources, createEntry, updateEntry, deleteEntry} = require("../controller/siteCtrl");

//making a route for admin page (admin.html) - capability to read the admin page
router.get("/api/admin", admin);

//capability to create in the admin page?
// router.post("/api/admin", );

// //capability to update in the admin page?
// router.put("/api/admin", );

// //capability to delete in the admin page?
// router.delete("/api/admin", );


//making a route for credit score page (credit-score.html)
router.get("/api/credit-score", creditScore);

//making a route for financial tracker page (financial-tracker.html)
//CRUD operations for financial tracker? Will this edit the page or the input fields? Goal is that user can edit the financial tracker inputs but not the overall page?
router.get("/api/financial-tracker", financialTracker);

//capability to create in the financial tracker page
router.post("/api/financial-tracker", createEntry);

//capability to update in the admin page
router.put("/api/financial-tracker", updateEntry);

//capability to delete in the admin page
router.delete("/api/financial-tracker", deleteEntry);

//making a route to get all users
router.get("/api/users", allUsers);

//making a route to get a single user
router.get("/api/users/:_id", getUser);

//making a route for resources page (resources.html)
router.get("/api/resources", resources);

// exporting router
module.exports = router;