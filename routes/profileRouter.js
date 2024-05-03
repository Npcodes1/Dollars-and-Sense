//Profile Router

//importing express
const express = require("express");

//importing express.Router() to handle different requests
const router = express.Router();

//import handler Functions from the controller directory
const profile = require("../controller/profileCtrl");

//making a GET route to read profile page (profile.html)
router.get("/api/profile", profile);

// exporting router
module.exports = router;