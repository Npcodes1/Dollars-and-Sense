//siteRouter to contain the front end page routes.
    //imports to siteCtrl

// importing express
const express = require("express");

//importing express.Router() to handle different requests
const router = express.Router();

//import handler Functions from the controller directory
const {financialTracker, createEntry, updateEntry, deleteEntry,  creditScore, resources, contact, sendMessage, profile, admin} = require("../controller/siteCtrl");

//Financial Tracker
//Goal is that user can edit the financial tracker inputs to add/edit/remove entries
//making GET route to read financial tracker page (financial-tracker.html)
router.get("/api/financial-tracker", financialTracker);

//capability to create new entry
router.post("/api/financial-tracker/create", createEntry);

//capability to update entry
router.put("/api/financial-tracker/edit", updateEntry);

//capability to delete entry
router.delete("/api/financial-tracker/delete", deleteEntry);

//Credit Score
//making a GET route to read credit score page (credit-score.html)
router.get("/api/credit-score", creditScore);

//Resources
//making a GET route to read resources page (resources.html)
router.get("/api/resources", resources);

//Contact
//making a GET route to read contact page (resources.html)
router.get("/api/contact", contact);

//Use contact form to send message
router.post("/api/admin", sendMessage);

//Profile
router.get("/api/profile", profile);

//Admin
//making a GET route to read admin page (admin.html) - capability to read the admin page
router.get("/api/admin", admin);

// exporting router
module.exports = router;