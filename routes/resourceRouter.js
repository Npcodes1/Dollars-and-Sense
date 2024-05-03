//Resources Router

//importing express
const express = require("express");

//importing express.Router() to handle different requests
const router = express.Router();

//import handler Functions from the controller directory
const resources = require("../controller/resourcesCtrl");

//making a GET route to read resources page (resources.html)
router.get("/api/resources", resources);

// exporting router
module.exports = router;